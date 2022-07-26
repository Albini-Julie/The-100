<template>
  <div class="mx-2">
    <div class="flex items-center gap-2">
      <img class="w-1/2 rounded-full" :src="image" alt="image personnage" />
      <div class="flex w-1/2 flex-col gap-2">
        <h3 class="m-auto text-center font-open-sans font-semibold">{{ titre }}</h3>
        <p class="text-center font-open-sans text-[14px]">
          {{ texte1 }}
        </p>
      </div>
    </div>
    <p class="mt-3 mb-5 font-open-sans text-[14px]">
      {{ texte2 }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    titre: String,
    texte1: String,
    texte2: String,
  },
};
</script>