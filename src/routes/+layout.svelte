<script>
  import "../app.css";
  import Logo from "$lib/comps/logo.svelte";
  import Icon from "@iconify/svelte";
  import { PUBLIC_WAT_NUM } from "$env/static/public";
  let { children } = $props();
</script>

<svelte:head>
  <title>Paragas</title>
</svelte:head>

<div class="toast toast-end p-2 sm:p-5 z-50">
  <a
    target="_blank"
    href={`https://wa.me/${PUBLIC_WAT_NUM}`}
    class="flex btn btn-circle btn-success btn-xl shadow-xl"
  >
    <Icon icon="mdi:whatsapp" />
  </a>
</div>

<div class="flex flex-col min-h-screen bg-base-200">
  <div class="fixed z-40 shadow-sm navbar bg-base-300">
    <div class="flex-1">
      <a
        href="/"
        class="text-xl navbar-start btn btn-lg btn-soft btn-secondary py-1 w-fit"
        data-sveltekit-preload-data="hover"
      >
        {@render Logo()}
      </a>
    </div>
    <div class="flex-none">
      <a href="/categorys" class="btn btn-square btn-ghost"
        ><Icon width="1.3rem" icon="ic:outline-shopping-cart" /></a
      >
    </div>
  </div>
  {@render children()}
  <!--<footer
    class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"
  >
    <aside class="flex flex-col gap-4">
      <div class="w-32">
        {@render Logo()}
      </div>
      <p class="text-md">Paragas</p>
    </aside>
    <nav>
      <h6 class="footer-title">Social</h6>
      <div class="grid grid-flow-col gap-4">
        <a href="https://facebook.com"
          ><Icon width="2rem" icon="ic:baseline-facebook" />
        </a>
      </div>
    </nav>
  </footer>-->
</div>
