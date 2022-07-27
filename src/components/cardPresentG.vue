<template>
  <div class="mx-2">
    <div class="flex items-center gap-2">
      <img class="w-1/2 rounded-full lg:w-1/3" :src="image" alt="image personnage" />
      <div class="flex w-1/2 flex-col gap-2 lg:w-2/3">
        <h3 class="m-auto font-open-sans font-semibold md:text-[25px] xl:text-[30px]">{{ titre }}</h3>
        <p class="text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
          {{ texte1 }}
        </p>
        <div class="hidden lg:block">
          <p class="mt-3 mb-5 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
            {{ texte2 }}
          </p>
        </div>
      </div>
    </div>
    <p class="mt-3 mb-5 font-open-sans text-[14px] md:text-[20px] lg:hidden xl:text-[25px]">
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