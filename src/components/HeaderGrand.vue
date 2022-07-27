<template>
  <header>
    <div class="flex items-center justify-around bg-white">
      <img class="h-[71px] w-[102px] xl:h-[111px] xl:w-[142px]" src="../components/icons/logo-noir.svg" alt="logo site" />
      <p class="font-open-sans text-[25px]">Les saisons</p>
      <p class="font-open-sans text-[25px]">Les personnages</p>
      <p class="font-open-sans text-[25px]">Mon avis</p>
    </div>
    <img :src="image" alt="image série" />
  </header>
</template>


<script>
export default {
  components: {},
  props: {
    image: String,
  },
};
</script>