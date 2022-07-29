<!-- <template>
  <header class="mb-10">
    <img class="absolute mt-[-28px]" :src="image" alt="image série" />
    <div class="relative z-30">
      <div class="flex justify-between p-2">
        <router-link to="/">
          <img class="h-[33px] w-[47px]" src="../components/icons/logo-blanc.svg" alt="logo blanc" />
        </router-link>
        <button class="relative z-50" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
          <MenuComp class=""></MenuComp>
          <span class="sr-only">Menu</span>
        </button>
      </div>
      <div class="mx-20 rounded-md bg-white text-center opacity-70">
        <h2 class="font-taviraj font-semibold opacity-100">The 100</h2>
        <h2 class="font-taviraj font-semibold opacity-100">{{ texte }}</h2>
        <chevronBas class="m-auto" />
      </div>

      <div
        class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
        :class="[menuOuvert ? 'translate-x-0' : '']"
      >
        <div class="flex justify-center bg-gray-900">
          <ul class="mb-40 sm:flex">
            <div class="mt-20">
              <div class="mx-20 rounded-md bg-white text-center opacity-70">
                <h2 class="font-taviraj font-semibold opacity-100">The 100</h2>
                <h2 class="font-taviraj font-semibold opacity-100">La série apocalyptique</h2>
                <chevronBas class="m-auto" />
              </div>
              <div class="flex items-end">
                <li class="mt-10 font-open-sans text-white"><router-link to="/LesSaisons">Les saisons</router-link></li>
                <chevronDroit />
              </div>
              <div class="flex items-end">
                <li class="mt-10 font-open-sans text-white"><router-link to="/LesPersonnages">Les Personnages</router-link></li>
                <chevronDroit />
              </div>
              <div class="flex items-end">
                <li class="mt-10 font-open-sans text-white"><router-link to="/MonAvis">Mon avis</router-link></li>
                <chevronDroit />
              </div>
              <div class="flex items-end">
                <li class="mt-10 font-open-sans text-white"><router-link to="/MentionsLegales">Mentions Légales</router-link></li>
                <chevronDroit />
              </div>
            </div>
          </ul>
        </div>
        <FooterComp />
      </div>
    </div>
  </header>
</template>

<script>
import MenuComp from "../components/icons/menu.vue";
import chevronBas from "./icons/chevronBas.vue";
import chevronDroit from "../components/icons/chevronDroit.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    MenuComp,
    chevronBas,
    chevronDroit,
    FooterComp,
  },
  props: {
    image: String,
    texte: String,
  },
};
</script>

-->

<template>
  <header class="mb-10 dark:bg-gray-900 dark:text-white">
    <div class="mx-10 mt-5 flex items-center justify-between bg-white dark:bg-gray-900">
      <router-link to="/">
        <img class="h-[33px] w-[47px] dark:hidden md:h-[75px] md:w-[93px]" src="../components/icons/logo-noir.svg" alt="logo site" />
        <img class="hidden h-[33px] w-[47px] dark:block md:h-[75px] md:w-[93px]" src="../components/icons/logo-blanc.svg" alt="logo site" />
      </router-link>
      <button class="relative z-50" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <menuNoir class="dark:hidden md:h-[47px] md:w-[47px]" />
        <menuBlanc class="hidden dark:block md:h-[47px] md:w-[47px]" />
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <img :src="image" alt="image série" />

    <div
      class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
      :class="[menuOuvert ? 'translate-x-0' : '']"
    >
      <div class="flex justify-center bg-gray-900">
        <ul class="mb-40 sm:flex">
          <div class="mt-20">
            <div class="mx-20 rounded-md bg-white text-center opacity-70">
              <h2 class="font-taviraj font-semibold opacity-100">The 100</h2>
              <h2 class="font-taviraj font-semibold opacity-100">La série apocalyptique</h2>
              <chevronBas class="m-auto" />
            </div>
            <div class="flex items-end">
              <li class="mt-10 font-open-sans text-white"><router-link to="/LesSaisons">Les saisons</router-link></li>
              <chevronDroit />
            </div>
            <div class="flex items-end">
              <li class="mt-10 font-open-sans text-white"><router-link to="/LesPersonnages">Les Personnages</router-link></li>
              <chevronDroit />
            </div>
            <div class="flex items-end">
              <li class="mt-10 font-open-sans text-white"><router-link to="/MonAvis">Mon avis</router-link></li>
              <chevronDroit />
            </div>
            <div class="flex items-end">
              <li class="mt-10 font-open-sans text-white"><router-link to="/MentionsLegales">Mentions Légales</router-link></li>
              <chevronDroit />
            </div>
          </div>
        </ul>
      </div>
      <FooterComp />
    </div>
  </header>
</template>


<script>
import menuNoir from "../components/icons/menuNoir.vue";
import FooterComp from "../components/FooterComp.vue";
import menuBlanc from "../components/icons/menu.vue";
export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    menuNoir,
    FooterComp,
    menuBlanc,
  },
  props: {
    image: String,
  },
};
</script>