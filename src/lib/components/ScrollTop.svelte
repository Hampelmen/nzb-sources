<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { langStore, strings } from '@/lib/i18n';

  let visible = false;
  const threshold = 400;

  function onScroll() {
    visible = window.scrollY > threshold;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });

  onDestroy(() => {
    window.removeEventListener('scroll', onScroll);
  });

  $: label = (strings[$langStore]?.actions as any)?.scrollTop ?? 'Back to top';
</script>

<button
  class="btn btn-primary btn-circle fixed right-6 bottom-6 z-50 shadow-lg transition-opacity duration-300 md:right-8 md:bottom-8 {visible
    ? 'opacity-100'
    : 'pointer-events-none opacity-0'}"
  on:click={scrollToTop}
  aria-label={label}
  title={label}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
  </svg>
</button>
