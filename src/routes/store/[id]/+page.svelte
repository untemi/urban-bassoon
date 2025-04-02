<script>
  import { PUBLIC_WAT_NUM } from "$env/static/public";
  import Icon from "@iconify/svelte";

  export let data;
  let fallback = "https://untemi.sirv.com/agrou/no-img.webp";
</script>

<main class="container mx-auto p-4 max-w-4xl mt-[64px]">
  <div
    class="card sm:card-side bg-base-100 shadow-xl overflow-hidden border border-base-300"
  >
    <figure class="sm:w-1/2 relative h-64 sm:h-auto">
      {#if data.picurl}
        <img
          src={data.picurl}
          alt={data.name}
          class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      {:else}
        <img src={fallback} alt="fallback" class="h-full w-full object-cover" />
      {/if}
    </figure>

    <div class="card-body lg:w-1/2">
      <h2 class="card-title text-2xl font-bold flex items-center gap-2">
        {data.name}
        {#if data.available}
          <div class="badge badge-success">Disponible</div>
        {:else}
          <div class="badge badge-error">Non Disponible</div>
        {/if}
      </h2>

      <div class="flex items-center mt-2 mb-1">
        <span class="text-2xl font-bold text-primary flex items-center">
          {data.price} DH
        </span>
      </div>

      <div class="divider my-2"></div>

      <p class="text-base-content/80 flex gap-2">
        <Icon icon="mdi:information-outline" class="flex-shrink-0 mt-1" />
        <span>{data.description}</span>
      </p>

      <div class="flex flex-col sm:flex-row gap-2 justify-end mt-6">
        <a
          href={`https://wa.me/${PUBLIC_WAT_NUM}?text=Hello! I'm interested in ${data.name}.`}
          class="btn btn-success gap-2"
          target="_blank"
          disabled={!data.available}
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:whatsapp" />
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</main>
