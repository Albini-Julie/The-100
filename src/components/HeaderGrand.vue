<template>
  <header>
    <div class="flex items-center justify-around bg-white dark:bg-gray-900 dark:text-white">
      <router-link to="/">
        <img class="h-[71px] w-[102px] dark:hidden xl:h-[111px] xl:w-[142px]" src="../components/icons/logo-noir.svg" alt="logo site" />
        <img
          class="hidden h-[71px] w-[102px] dark:block xl:h-[111px] xl:w-[142px]"
          src="../components/icons/logo-blanc.svg"
          alt="logo site"
        />
      </router-link>
      <router-link to="/LesSaisons">
        <p class="font-open-sans text-[25px]">Les saisons</p>
      </router-link>
      <router-link to="/LesPersonnages">
        <p class="font-open-sans text-[25px]">Les personnages</p>
      </router-link>
      <router-link to="/MonAvis">
        <p class="font-open-sans text-[25px]">Mon avis</p>
      </router-link>
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