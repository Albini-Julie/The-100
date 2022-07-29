<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderMentionsLegales.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderMentionsLegales.jpg" />
    </div>
  </header>
  <div class="dark:bg-gray-900 dark:text-white">
    <h2 class="flex justify-center font-taviraj text-[40px] font-bold text-red-700 md:text-[50px] xl:text-[60px]">Erreur 404</h2>
    <p class="mx-10 text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
      Nous n'avons pas pu trouver la page que vous recherchiez.
    </p>

    <form
      class="mt-10 flex items-center justify-center"
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q'"
    >
      <input
        class="m-5 border-b-2 border-b-gray-900 bg-white text-white dark:border-b-white dark:bg-gray-900 md:text-[20px] xl:text-[25px]"
        placeholder="Votre recherche"
        type="text"
        id="q"
        name="q"
        x-model="q"
      />
      <bouton type="submit"> Chercher </bouton>
    </form>

    <h3 class="mt-10 flex justify-center font-taviraj text-[20px] font-bold md:text-[30px] xl:text-[35px]">Plan du site</h3>
    <div class="m-10 xl:m-32">
      <router-link to="/">
        <p class="my-5 flex font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">Accueil</p>
      </router-link>
      <div class="flex items-center">
        <router-link to="/LesSaisons">
          <p class="font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">Les saisons</p>
        </router-link>
        <chevronD />
        <div class="flex flex-col gap-2">
          <router-link to="/Saison1">
            <p class="font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">La saison 1</p>
          </router-link>
          <router-link to="/Saison2">
            <p class="font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">La saison 2</p>
          </router-link>
          <router-link to="/Saison3">
            <p class="font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">La saison 3</p>
          </router-link>
          <router-link to="/Saison4">
            <p class="font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">La saison 4</p>
          </router-link>
        </div>
      </div>
      <router-link to="/LesPersonnages">
        <p class="my-5 font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">Les personnages</p>
      </router-link>
      <router-link to="/Monavis">
        <p class="font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">Mon avis</p>
      </router-link>
      <router-link to="/Mentionslegales">
        <p class="mt-5 font-open-sans text-[14px] font-semibold md:text-[20px] xl:text-[25px]">Mentions légales</p>
      </router-link>
    </div>

    <FooterComp class="mt-10" />
  </div>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import bouton from "../components/bouton.vue";
import chevronD from "../components/icons/chevronDroitRouge.vue";
import FooterComp from "../components/FooterComp.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
export default {
  components: {
    HeaderComp,
    bouton,
    chevronD,
    FooterComp,
    HeaderGrand,
  },
};
</script>