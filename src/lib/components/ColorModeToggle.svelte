<script lang="ts">
  import { langStore, strings } from '@/lib/i18n';

  type Mode = 'dark' | 'light';

  let mode: Mode =
    (localStorage.getItem('theme') as Mode) ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light';

  $: {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }
</script>

<div class="join">
  <button
    class="btn btn-sm join-item {mode === 'dark'
      ? 'bg-gradient-to-r from-pink-500 to-purple-500'
      : ''}"
    on:click={() => (mode = 'dark')}
  >
    {strings[$langStore].actions.dark}
  </button>
  <button
    class="btn btn-sm join-item {mode === 'light'
      ? 'bg-gradient-to-r from-pink-500 to-purple-500'
      : ''}"
    on:click={() => (mode = 'light')}
  >
    {strings[$langStore].actions.light}
  </button>
</div>
