<script>
  import Icon from "@iconify/svelte";
  import Logo from "$lib/comps/logo.svelte";
  export let data;
</script>

<div class="grow pt-[64px] container mx-auto px-4">
  <!-- Hero Section -->
  <div class="bg-base-100 rounded-box my-8 overflow-hidden">
    <div class="relative">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div class="p-8 lg:p-12 flex flex-col">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16">
              {@render Logo()}
            </div>
            <div class="badge badge-primary py-3 px-4 text-sm font-medium">
              Expert en Emballage
            </div>
          </div>

          <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Solutions d'Emballage
          </h1>

          <p class="text-lg mb-8 max-w-md">
            Nous sommes spécialisé en emballages tous genres .. standard ou sur
            demande.
          </p>

          <a href="/store" class="btn btn-primary w-3xs">
            <Icon icon="mdi:shopping" class="mr-2" />
            Découvrir nos Produits
          </a>
        </div>

        <div class="relative h-[400px] lg:h-auto">
          <img
            src="/mainimg.webp"
            alt="Produits d'emballage professionnels"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-base-300 to-transparent p-6"
          >
            <div class="badge float-right badge-secondary py-3 gap-2">
              <Icon icon="mdi:leaf" />
              Solutions Écologiques
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Featured Products -->
  <div class="my-10">
    <h2 class="text-3xl font-bold text-center mb-8">Produits Vedettes</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.items as item}
        <a href={"/store/" + item.id} class="card bg-base-100 shadow-xl">
          <figure class="h-48 relative overflow-hidden">
            <img
              src={item.picurl}
              alt={item.name}
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title truncate">{item.name}</h2>
            <div class="flex justify-between items-center mt-2">
              <span class="text-xl font-bold">{item.price}DH</span>
              <span class="font-bold">
                {item.stock > 0 ? `${item.stock} in stock` : "Out of stock"}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
