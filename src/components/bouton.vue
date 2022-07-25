<template>
  <div class="flex justify-center rounded-lg bg-red-700 p-3 text-[14px]">
    <span class="font-open-sans font-semibold text-white"><slot /></span>
    <chevronDroit />
  </div>
</template>

<script>
import chevronDroit from "../components/icons/chevronDroit.vue";
export default {
  components: {
    chevronDroit,
  },
};
</script>