<script>
  import { page } from "$app/stores";
</script>

<div class="flex grow justify-center items-center">
  <div class="text-xl font-bold">
    ERROR : {$page.status} - {$page.error.message}
  </div>
</div>
