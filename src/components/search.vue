<template>
  <div class="flex justify-center">
    <div class="flex w-1/2 items-center justify-between rounded-lg border-2 border-gray-900 p-2">
      <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">Chercher un personnage...</p>
      <loupe />
    </div>
  </div>
</template>

<script>
import loupe from "../components/icons/loupe.vue";
export default {
  components: {
    loupe,
  },
};
</script>