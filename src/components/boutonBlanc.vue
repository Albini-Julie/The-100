<template>
  <div class="flex justify-center rounded-lg bg-white p-3">
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