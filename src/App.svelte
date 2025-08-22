<script lang="ts">
  import Navbar from '@/lib/components/Navbar.svelte';
  import DataTable from '@/lib/components/DataTable.svelte';
  import ColorModeToggle from '@/lib/components/ColorModeToggle.svelte';
  import ScrollTop from '@/lib/components/ScrollTop.svelte';
  import Footer from '@/lib/components/Footer.svelte';
  import GlobalFilters from '@/lib/components/GlobalFilters.svelte';

  import { moderated } from '@/lib/data/moderated';
  import { publicIndexers } from '@/lib/data/public';
  import { spotwebIndexers } from '@/lib/data/spotweb';

  import { strings, langStore } from '@/lib/i18n';

  const allRows = [...moderated, ...publicIndexers, ...spotwebIndexers];
</script>

<svelte:head>
  <title>{strings[$langStore].title}</title>
  <meta property="og:title" content="NZB Sources" />
  <meta property="og:description" content="Your ultimate guide to Usenet indexers" />
</svelte:head>

<div class="bg-base-100 text-base-content min-h-screen font-sans">
  <header class="from-primary to-secondary bg-gradient-to-r px-4 py-12">
    <h1 class="float mb-4 text-center text-4xl font-bold text-white sm:text-5xl">
      {strings[$langStore].title}
    </h1>
    <p class="text-center text-xl text-white">
      {strings[$langStore].subtitle}
    </p>
  </header>

  <Navbar />

  <main class="mx-auto max-w-7xl px-4 py-6">
    <div class="mb-8 rounded-lg border-4 border-dashed border-gray-700 p-4">
      <p class="text-center text-lg font-bold text-yellow-400">{strings[$langStore].notice}</p>
    </div>

    <!-- GLOBAL FILTERS (affects all tables) -->
    <div class="mb-8">
      <GlobalFilters {allRows} />
    </div>

    <section id="moderated-indexers" class="mb-12">
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-primary text-3xl font-semibold">
          {strings[$langStore].sections.moderatedTitle}
        </h2>
        <ColorModeToggle />
      </div>
      <p class="mb-4 opacity-80">{strings[$langStore].sections.moderatedDesc}</p>
      <DataTable rows={moderated} />
    </section>

    <section id="public-indexers" class="mb-12">
      <h2 class="text-primary mb-2 text-3xl font-semibold">
        {strings[$langStore].sections.publicTitle}
      </h2>
      <p class="mb-4 opacity-80">{strings[$langStore].sections.publicDesc}</p>
      <div class="alert alert-error mb-4">{strings[$langStore].sections.uploadWarning}</div>
      <DataTable rows={publicIndexers} disableColumns={['content', 'crypto']} />
    </section>

    <section id="spotweb-indexers" class="mb-12">
      <h2 class="text-primary mb-2 text-3xl font-semibold">
        {strings[$langStore].nav.navspotweb}
      </h2>
      <p class="mb-4 opacity-80">{strings[$langStore].sections.spotwebDesc}</p>
      <DataTable rows={spotwebIndexers} disableColumns={['payment', 'content', 'crypto']} />
    </section>
  </main>

  <Footer />
  <ScrollTop />
</div>
