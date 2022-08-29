<template>
  <div class="flex items-center justify-center rounded-lg bg-white p-3 md:text-[20px] xl:text-[25px]">
    <span class="font-open-sans font-semibold text-red-700"><slot /></span>
    <chevronDroitRouge />
  </div>
</template>

<script>
import chevronDroitRouge from "../components/icons/chevronDroitRouge.vue";
export default {
  components: {
    chevronDroitRouge,
  },
};
</script>