<script lang="ts">
  import { langStore, strings } from '@/lib/i18n';
</script>

<footer class="bg-gray-800 px-4 py-8">
  <div class="mx-auto max-w-7xl text-center">
    <p class="mb-2">
      {strings[$langStore].footer.notice}
    </p>

    <p class="mb-4">
      {strings[$langStore].footer.thanksPrefix}
      &nbsp;<a
        href="https://rexum.space"
        class="link link-hover"
        target="_blank"
        rel="noopener noreferrer">rexum</a
      >
    </p>

    <a
      href="https://github.com/Hampelmen/nzb-sources/"
      class="inline-flex items-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-600 focus:border-gray-900 focus:ring focus:outline-none active:bg-gray-800 disabled:opacity-25"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.863 8.178 6.838 9.487.5.09.683-.219.683-.488v-1.748c-2.782.606-3.365-1.355-3.365-1.355-.454-1.156-1.11-1.464-1.11-1.464-.91-.626.068-.614.068-.614 1.003.07 1.53 1.057 1.53 1.057.894 1.539 2.347 1.094 2.917.836.09-.662.35-1.095.636-1.346-2.221-.254-4.555-1.115-4.555-4.961 0-1.095.39-1.99 1.029-2.69-.1-.254-.446-1.276.098-2.659 0 0 .84-.27 2.75 1.025a9.366 9.366 0 012.503-.34c.849.003 1.704.116 2.503.34 1.91-1.295 2.75-1.025 2.75-1.025.544 1.383.198 2.405.097 2.659.64.7 1.029 1.595 1.029 2.69 0 3.855-2.336 4.703-4.563 4.953.36.309.68.922.68 1.86v2.754c0 .27.18.583.688.486C17.137 18.195 20 14.442 20 10.017 20 4.484 15.523 0 10 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      {strings[$langStore].actions.viewOnGithub}
    </a>
  </div>
</footer>
