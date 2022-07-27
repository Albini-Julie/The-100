<template>
  <div class="flex items-center justify-center rounded-lg bg-white p-3">
    <span class="font-open-sans text-[14px] font-semibold text-red-700 md:text-[20px] xl:text-[25px]"><slot /></span>
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