<template>
  <div class="flex items-center justify-between rounded-lg border-2 border-gray-900 p-2">
    <p class="font-open-sans text-[14px]">Chercher un personnage...</p>
    <loupe />
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