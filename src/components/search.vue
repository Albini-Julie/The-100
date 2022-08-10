<template>
  <div class="flex justify-center dark:bg-gray-900 dark:text-white">
    <div class="flex items-center justify-between gap-10 rounded-lg border-2 border-gray-900 p-2 dark:border-white xl:gap-44">
      <input
        type="text"
        v-model="filter"
        placeholder="Chercher un personnage..."
        class="font-open-sans text-[14px] dark:bg-gray-900 md:text-[20px] xl:text-[25px]"
      />
      <button v-on:click="recherche = true">
        <loupe class="dark:hidden" />
        <loupeBlanc class="hidden dark:block" />
      </button>
    </div>
  </div>
</template>

<script>
import loupe from "../components/icons/loupe.vue";
import loupeBlanc from "../components/icons/loupeBlanc.vue";
export default {
  data() {
    return {
      recherche: false,
      filter: "",
    };
  },
  components: {
    loupe,
    loupeBlanc,
  },
};
</script>