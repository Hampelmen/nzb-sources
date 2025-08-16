<script lang="ts">
  import type { Indexer, Membership } from '@/lib/data/indexerStructure';
  import type { FiltersState } from '@/lib/stores/filters';
  import {
    strings,
    langStore,
    regLabel,
    fmtLimit,
    tMembership,
    sReplace,
    tApiKey,
  } from '@/lib/i18n';
  import { filters } from '@/lib/stores/filters';
  import { tick } from 'svelte';

  export let rows: Indexer[] = [];

  type ColumnKey = 'registration' | 'payment' | 'crypto' | 'content';
  export let disableColumns: ColumnKey[] = [];

  let search = '';
  let sortKey: 'indexer' | 'registration' = 'indexer';
  let sortDir: 'asc' | 'desc' = 'asc';

  let visible: Record<ColumnKey, boolean> = {
    registration: true,
    payment: true,
    crypto: true,
    content: true,
  };
  $: disabledSet = new Set(disableColumns);
  $: {
    for (const k of disabledSet) visible[k] = false;
  }
  function toggleCol(key: ColumnKey) {
    if (disabledSet.has(key)) return;
    visible = { ...visible, [key]: !visible[key] };
  }

  let scrollEl: HTMLDivElement | null = null;
  let openMap: Record<string, boolean> = {};

  function setSort(k: 'indexer' | 'registration') {
    if (k === sortKey) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else {
      sortKey = k;
      sortDir = 'asc';
    }
  }

  // Subscribe reactively to the filters store
  let f: FiltersState;
  $: f = $filters;

  // ---- Utilities for filtering ----
  function asNumberLike(v?: number | 'unlimited' | '?' | null): number {
    if (v === 'unlimited') return Number.POSITIVE_INFINITY;
    if (v === '?' || v == null) return 0;
    return Number(v);
  }
  function asApiNumber(m: Membership): number {
    if (m.apiKey === 'unlimited') return Number.POSITIVE_INFINITY;
    return asNumberLike(m.apiPerDay);
  }
  function asNzbNumber(m: Membership): number {
    return asNumberLike(m.nzbPerDay);
  }

  function membershipMatches(m: Membership, filters: FiltersState): boolean {
    if (filters.minApi != null && asApiNumber(m) < filters.minApi) return false;
    if (filters.minNzb != null && asNzbNumber(m) < filters.minNzb) return false;
    if (filters.lifetimeOnly) {
      const d = (m.duration ?? '').toLowerCase();
      if (!d.includes('lifetime') && !d.includes('lebenslang')) return false;
    }
    if (filters.freeOnly) {
      const priceKeyHit = m.priceKey === 'free';
      const priceTxt = (m.price ?? '').toLowerCase();
      const priceTxtHit = priceTxt.includes('free') || priceTxt.includes('kostenlos');
      if (!priceKeyHit && !priceTxtHit) return false;
    }
    return true;
  }

  function indexerMatches(r: Indexer, filters: FiltersState): boolean {
    if (filters.language !== 'any') {
      if (!(r.content || "").includes(filters.language)) return false;
    }
    if (filters.supportsCrypto) {
      const s = (r.crypto?.join(',') ?? '').replace(/[^a-z0-9]/gi, '').toLowerCase();
      if (!s || s === '-' || s === '?') return false;
    }
    return true;
  }

  function visibleMemberships(r: Indexer, filters: FiltersState): Membership[] {
    return (r.memberships ?? []).filter((m) => membershipMatches(m, filters));
  }

  function rowMatchesSearch(r: Indexer, q: string, filters: FiltersState) {
    const mems = visibleMemberships(r, filters);
    const big =
      [
        r.name,
        r.id,
        r.registration,
        r.payments?.join(' ') ?? '',
        r.crypto?.join(' ') ?? '',
        r.content ?? '',
      ].join(' ') +
      ' ' +
      mems
        .map((m) =>
          [
            m.nameKey ?? '',
            m.name ?? '',
            m.priceKey ?? '',
            m.price ?? '',
            m.duration,
            m.apiPerDay,
            m.nzbPerDay,
          ].join(' ')
        )
        .join(' ');
    return big.toLowerCase().includes(q);
  }

  let filtered: Indexer[] = rows;
  $: filtered = rows
    .filter((r) => indexerMatches(r, f))
    .map((r) => ({ ...r, memberships: visibleMemberships(r, f) }))
    .filter((r) => r.memberships.length > 0)
    .filter((r) => (search.trim() ? rowMatchesSearch(r, search.toLowerCase(), f) : true));

  let sorted: Indexer[] = filtered;
  $: sorted = [...filtered].sort((a, b) => {
    const av = sortKey === 'indexer' ? a.name : a.registration;
    const bv = sortKey === 'indexer' ? b.name : b.registration;
    return sortDir === 'asc'
      ? av.localeCompare(bv, undefined, { sensitivity: 'base' })
      : bv.localeCompare(av, undefined, { sensitivity: 'base' });
  });

  function expandAll() {
    const next: Record<string, boolean> = { ...openMap };
    for (const r of sorted) next[r.id] = true;
    openMap = next;
  }

  function collapseAll() {
    const next: Record<string, boolean> = { ...openMap };
    for (const r of sorted) next[r.id] = false;
    openMap = next;
  }

  function displayMembershipName(m: Membership, lang: 'en' | 'de') {
    const base = m.nameKey ? tMembership(lang, m.nameKey) : '';
    return m.name ? (base ? `${base}/${m.name}` : m.name) : base;
  }

  function displayPrice(m: Membership, lang: 'en' | 'de') {
    return m.priceKey ? tMembership(lang, m.priceKey) : (m.price ?? strings[lang].labels.unknown);
  }

  async function onToggleOpen(id: string, inputEl: HTMLInputElement) {
    if (!inputEl.checked) return;

    await tick();

    const collapseEl = inputEl.closest('.collapse') as HTMLElement | null;
    if (!collapseEl) return;

    const contentEl = collapseEl.querySelector('.collapse-content') as HTMLElement | null;
    if (!contentEl) return;

    const container = scrollEl;
    if (!container) return;

    const contentRect = contentEl.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const overflowBottom = contentRect.bottom - containerRect.bottom;

    const overflowTop = containerRect.top - contentRect.top;

    if (overflowBottom > 0) {
      container.scrollBy({ top: overflowBottom + 12, behavior: 'smooth' });
    } else if (overflowTop > 0) {
      container.scrollBy({ top: -(overflowTop + 12), behavior: 'smooth' });
    }
  }
</script>

<div class="mb-4">
  <input
    class="input input-bordered w-full"
    placeholder={strings[$langStore].actions.searchPlaceholder}
    bind:value={search}
  />
</div>

<div class="mb-4 flex flex-wrap items-center gap-2">
  <div class="join">
    <button class="btn btn-xs join-item" on:click={expandAll}>
      {strings[$langStore].actions.expandAll}
    </button>
    <button class="btn btn-xs join-item" on:click={collapseAll}>
      {strings[$langStore].actions.collapseAll}
    </button>
  </div>

  <div class="divider divider-horizontal"></div>

  {#if !disabledSet.has('registration')}
    <button
      class="btn btn-xs {visible.registration ? 'btn-primary' : 'btn-neutral'}"
      on:click={() => toggleCol('registration')}
    >
      {visible.registration ? strings[$langStore].actions.hide : strings[$langStore].actions.show}
      &nbsp;{strings[$langStore].tableHeaders.registration}
    </button>
  {/if}

  {#if !disabledSet.has('payment')}
    <button
      class="btn btn-xs {visible.payment ? 'btn-primary' : 'btn-neutral'}"
      on:click={() => toggleCol('payment')}
    >
      {visible.payment ? strings[$langStore].actions.hide : strings[$langStore].actions.show}
      &nbsp;{strings[$langStore].tableHeaders.payment}
    </button>
  {/if}

  {#if !disabledSet.has('crypto')}
    <button
      class="btn btn-xs {visible.crypto ? 'btn-primary' : 'btn-neutral'}"
      on:click={() => toggleCol('crypto')}
    >
      {visible.crypto ? strings[$langStore].actions.hide : strings[$langStore].actions.show}
      &nbsp;{strings[$langStore].tableHeaders.crypto}
    </button>
  {/if}

  {#if !disabledSet.has('content')}
    <button
      class="btn btn-xs {visible.content ? 'btn-primary' : 'btn-neutral'}"
      on:click={() => toggleCol('content')}
    >
      {visible.content ? strings[$langStore].actions.hide : strings[$langStore].actions.show}
      &nbsp;{strings[$langStore].tableHeaders.content}
    </button>
  {/if}
</div>

<div class="max-h-[500px] overflow-auto rounded-lg shadow" bind:this={scrollEl}>
  <table class="table-zebra table w-full">
    <thead class="bg-base-300 sticky">
      <tr>
        <th class="cursor-pointer" on:click={() => setSort('indexer')}>
          {strings[$langStore].tableHeaders.indexer}
        </th>
        {#if !disabledSet.has('registration') && visible.registration}
          <th class="cursor-pointer" on:click={() => setSort('registration')}>
            {strings[$langStore].tableHeaders.registration}
          </th>
        {/if}
        <th>{strings[$langStore].tableHeaders.memberships}</th>
        {#if !disabledSet.has('payment') && visible.payment}<th
            >{strings[$langStore].tableHeaders.payment}</th
          >{/if}
        {#if !disabledSet.has('crypto') && visible.crypto}<th
            >{strings[$langStore].tableHeaders.crypto}</th
          >{/if}
        {#if !disabledSet.has('content') && visible.content}<th
            >{strings[$langStore].tableHeaders.content}</th
          >{/if}
      </tr>
    </thead>

    <tbody>
      {#each sorted as r}
        <tr>
          <td class="font-medium">{sReplace($langStore, r.name)}</td>
          {#if !disabledSet.has('registration') && visible.registration}
            <td>{regLabel($langStore, r.registration)}</td>
          {/if}

          <td class="align-top">
            <div class="mb-2 flex flex-wrap gap-1">
              {#each r.memberships.slice(0, 4) as m}
                <span class="badge badge-outline">{displayMembershipName(m, $langStore)}</span>
              {/each}
              {#if r.memberships.length > 4}
                <span class="badge">+{r.memberships.length - 4}</span>
              {/if}
            </div>

            <div class="collapse-arrow border-base-300 rounded-box collapse border">
              <input
                type="checkbox"
                bind:checked={openMap[r.id]}
                on:change={(e) => onToggleOpen(r.id, e.currentTarget as HTMLInputElement)}
              />
              <div class="collapse-title text-sm font-medium">
                {strings[$langStore].actions.showAll(r.memberships.length)}
              </div>
              <div class="collapse-content">
                <div class="overflow-x-auto">
                  <table class="table-sm table">
                    <thead>
                      <tr>
                        <th>{strings[$langStore].nestedHeaders.membership}</th>
                        <th>{strings[$langStore].nestedHeaders.apiDay}</th>
                        <th>{strings[$langStore].nestedHeaders.nzbDay}</th>
                        <th>{strings[$langStore].nestedHeaders.duration}</th>
                        <th>{strings[$langStore].nestedHeaders.price}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each r.memberships as m}
                        <tr>
                          <td class="font-medium">{displayMembershipName(m, $langStore)}</td>
                          <td>
                            {#if m.apiKey}
                              {tApiKey($langStore, m.apiKey)}
                            {:else}
                              {fmtLimit($langStore, m.apiPerDay)}
                            {/if}
                          </td>
                          <td>{fmtLimit($langStore, m.nzbPerDay)}</td>
                          <td
                            >{sReplace(
                              $langStore,
                              m.duration ?? strings[$langStore].labels.unknown
                            )}</td
                          >
                          <td>{displayPrice(m, $langStore)}</td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </td>

          {#if !disabledSet.has('payment') && visible.payment}<td
              >{r.payments?.join(', ') ?? '—'}</td
            >{/if}
          {#if !disabledSet.has('crypto') && visible.crypto}<td>{r.crypto?.join(', ') ?? '—'}</td
            >{/if}
          {#if !disabledSet.has('content') && visible.content}<td>{r.content ?? '—'}</td>{/if}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
