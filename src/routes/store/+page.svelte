<script>
  export let data;

  let fallback = "https://untemi.sirv.com/agrou/no-img.webp";
</script>

<div class="grow pt-[64px]">
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
  >
    {#each data.items as item}
      <a
        href={"/store/" + item.id}
        class={item.available
          ? `card bg-base-100 shadow-xl`
          : "card bg-base-100 shadow-xl tab-disabled"}
      >
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
              {item.available ? `Disponible` : "Pas Disponible"}
            </span>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
