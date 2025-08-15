<script lang="ts">
  import type { Indexer } from '@/lib/data/indexerStructure';
  import type { FiltersState } from '@/lib/stores/filters';
  import { filters, resetFilters } from '@/lib/stores/filters';
  import { langStore, strings } from '@/lib/i18n';

  export let allRows: Indexer[] = [];

  // Build language options dynamically from all rows
  function langsFromContent(content?: string): string[] {
    if (!content) return [];

    // Remove blacklisted tokens (case-insensitive, whole-word)
    const blacklist = ['be', 'no', 'No', 'to'];
    const escaped = blacklist.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const removeRe = new RegExp(`\\b(?:${escaped.join('|')})\\b`, 'gi');
    const sanitized = content.replace(removeRe, ' ');

    // Extract remaining two-letter codes
    const codes = sanitized.toUpperCase().match(/\b[A-Z]{2}\b/g) ?? [];
    codes.push('Anime');
    codes.push('Music');
    codes.push('Encodes');
    return Array.from(new Set(codes));
  }


  $: languageOptions = Array.from(new Set(allRows.flatMap((r) => langsFromContent(r.content))))
    .filter(Boolean)
    .sort((a,b)=>a.length-b.length||a.localeCompare(b))


  // Subscribe reactively to the store (Svelte auto-subscription)
  let f: FiltersState;
  $: f = $filters;

  // Count active filters
  $: activeCount =
    (f.minApi != null ? 1 : 0) +
    (f.minNzb != null ? 1 : 0) +
    (f.language !== 'any' ? 1 : 0) +
    (f.lifetimeOnly ? 1 : 0) +
    (f.freeOnly ? 1 : 0) +
    (f.supportsCrypto ? 1 : 0);

  let open = false;

  // Helpers to coerce number inputs
  function toNumOrNull(v: string): number | null {
    if (v === '' || v == null) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }
</script>

<div class="collapse-arrow bg-base-200 border-accent collapse mb-4">
  <input type="checkbox" bind:checked={open} />
  <div class="collapse-title text-md flex items-center justify-between font-medium">
    <span>{strings[$langStore].filters.title}</span>
    {#if activeCount > 0}
      <span class="badge badge-primary badge-sm">{activeCount}</span>
    {/if}
  </div>

  <div class="collapse-content">
    <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      <!-- Min API -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">{strings[$langStore].filters.minApi}</span>
        </div>
        <input
          type="number"
          class="input input-bordered w-full"
          inputmode="numeric"
          min="0"
          placeholder="1000"
          on:input={(e) => {
            const v = (e.currentTarget as HTMLInputElement).value;
            filters.update((x) => ({ ...x, minApi: toNumOrNull(v) }));
          }}
          value={f.minApi ?? ''}
        />
      </label>

      <!-- Min NZB -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">{strings[$langStore].filters.minNzb}</span>
        </div>
        <input
          type="number"
          class="input input-bordered w-full"
          inputmode="numeric"
          min="0"
          placeholder="100"
          on:input={(e) => {
            const v = (e.currentTarget as HTMLInputElement).value;
            filters.update((x) => ({ ...x, minNzb: toNumOrNull(v) }));
          }}
          value={f.minNzb ?? ''}
        />
      </label>

      <!-- Language -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">{strings[$langStore].filters.language}</span>
        </div>
        <select
          class="select select-bordered w-full"
          bind:value={f.language}
          on:change={(e) => {
            const v = (e.currentTarget as HTMLSelectElement).value;
            filters.update((x) => ({ ...x, language: v }));
          }}
        >
          <option value="any">{strings[$langStore].filters.any}</option>
          {#each languageOptions as code}
            <option value={code}>{code}</option>
          {/each}
        </select>
      </label>

      <!-- Lifetime only -->
      <label class="label flex cursor-pointer gap-2">
        <input
          type="checkbox"
          class="checkbox"
          checked={f.lifetimeOnly}
          on:change={(e) => {
            const v = (e.currentTarget as HTMLInputElement).checked;
            filters.update((x) => ({ ...x, lifetimeOnly: v }));
          }}
        />
        <span class="label-text">{strings[$langStore].filters.lifetimeOnly}</span>
      </label>

      <!-- Free only -->
      <label class="label flex cursor-pointer gap-2">
        <input
          type="checkbox"
          class="checkbox"
          checked={f.freeOnly}
          on:change={(e) => {
            const v = (e.currentTarget as HTMLInputElement).checked;
            filters.update((x) => ({ ...x, freeOnly: v }));
          }}
        />
        <span class="label-text">{strings[$langStore].filters.freeOnly}</span>
      </label>

      <!-- Supports crypto -->
      <label class="label flex cursor-pointer gap-2">
        <input
          type="checkbox"
          class="checkbox"
          checked={f.supportsCrypto}
          on:change={(e) => {
            const v = (e.currentTarget as HTMLInputElement).checked;
            filters.update((x) => ({ ...x, supportsCrypto: v }));
          }}
        />
        <span class="label-text">{strings[$langStore].filters.supportsCrypto}</span>
      </label>
    </div>

    <div class="mt-4">
      <button class="btn btn-sm" on:click={resetFilters}>
        {strings[$langStore].filters.clear}
      </button>
    </div>
  </div>
</div>
