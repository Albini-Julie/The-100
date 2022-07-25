<template>
  <div>
    <div class="flex justify-center">
      <img class="mx-10 h-[412px] w-[275px] rounded-lg" :src="image" alt="affiche saison" />
    </div>
    <div class="mt-2 bg-gray-900">
      <div class="text-center leading-loose text-white">
        <h2 class="mb-2 font-taviraj text-[25px] font-semibold">{{ saison }}</h2>
        <h2 class="font-taviraj text-[14px] font-semibold opacity-100">{{ texte }}</h2>
        <h2 class="font-taviraj text-[14px] font-semibold opacity-100">{{ texte2 }}</h2>
        <h2 class="font-taviraj text-[14px] font-semibold opacity-100">{{ texte3 }}</h2>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
  props: {
    image: String,
    texte: String,
    texte2: String,
    texte3: String,
    saison: String,
  },
};
</script>