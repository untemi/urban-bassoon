<script>
  export let data;

  let fallback = "https://untemi.sirv.com/agrou/no-img.webp";
</script>

<div class="grow pt-[64px]">
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
  >
    {#each data.categorys as category}
      <a href={"/categorys/" + category.id} class="card bg-base-100 shadow-xl">
        <figure class="h-48 relative overflow-hidden">
          <img
            src={category.picurl}
            alt={category.name}
            class="w-full h-full object-cover"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title truncate">{category.name}</h2>
          <div class="flex justify-between items-center mt-2">
            <span class="text-xl font-bold"
              >👆appuyée ici pour plus de détails.</span
            >
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
