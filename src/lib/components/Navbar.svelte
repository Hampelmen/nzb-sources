<script lang="ts">
  import { langStore, strings } from '@/lib/i18n';

  function toggleMobile() {
    document.getElementById('main-nav')?.classList.toggle('hidden');
  }
</script>

<nav class="bg-base-200">
  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
    <div class="flex items-center gap-2">
      <button class="btn btn-ghost md:hidden" on:click={toggleMobile}>
        <span class="text-xl">☰</span>
      </button>
      <div id="main-nav" class="hidden items-baseline gap-2 md:flex">
        <a href="#moderated-indexers" class="btn btn-primary btn-sm">
          {strings[$langStore].nav.navmoderated}
        </a>
        <a href="#public-indexers" class="btn btn-primary btn-sm">
          {strings[$langStore].nav.navpublic}
        </a>
        <a href="#spotweb-indexers" class="btn btn-primary btn-sm">
          {strings[$langStore].nav.navspotweb}
        </a>
        <a href="https://rexum.space/p/usenet-provider-deals/" class="btn btn-ghost btn-sm">
          {strings[$langStore].nav.deals}
        </a>
        <a href="https://github.com/PCJones/usenet-guide/" class="btn btn-ghost btn-sm">
          {strings[$langStore].nav.guide}
        </a>
        <a href="https://discord.gg/src6zcH4rr" class="btn btn-ghost btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            style="scale:1.8"
            fill="currentColor"
            class="bi bi-discord"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
            />
          </svg>

          {strings[$langStore].nav.discord}
        </a>
      </div>
    </div>

    <select
      class="rounded-md bg-gray-700 px-3 py-2 text-white transition duration-300 ease-in-out group-hover:block hover:bg-gray-600 focus:outline-none"
      bind:value={$langStore}
    >
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  </div>
</nav>
