<template>
  <HeaderComp image="/public/mentionslegales/mentionslegales1.jpg" texte="page 404" />
  <h2 class="flex justify-center font-taviraj text-[40px] font-bold text-red-700">Erreur 404</h2>
  <p class="mx-10 text-center font-open-sans text-[14px]">Nous n'avons pas pu trouver la page que vous recherchiez.</p>

  <form
    class="mt-10 flex items-center justify-center"
    action="https://duckduckgo.com/"
    method="GET"
    x-data="{ q:'', }"
    x-on:submit="q = q'"
  >
    <input
      class="m-5 border-b-2 border-b-gray-900 bg-white text-white dark:bg-black"
      placeholder="Votre recherche"
      type="text"
      id="q"
      name="q"
      x-model="q"
    />
    <bouton type="submit"> Chercher </bouton>
  </form>

  <h3 class="mt-10 flex justify-center font-taviraj text-[20px] font-bold">Plan du site</h3>
  <div class="m-10">
    <router-link to="/">
      <p class="my-5 flex font-open-sans text-[14px] font-semibold">Accueil</p>
    </router-link>
    <div class="flex items-center">
      <router-link to="/LesSaisons">
        <p class="font-open-sans text-[14px] font-semibold">Les saisons</p>
      </router-link>
      <chevronD />
      <div class="flex flex-col gap-2">
        <router-link to="/Saison1">
          <p class="font-open-sans text-[14px] font-semibold">La saison 1</p>
        </router-link>
        <router-link to="/Saison2">
          <p class="font-open-sans text-[14px] font-semibold">La saison 2</p>
        </router-link>
        <router-link to="/Saison3">
          <p class="font-open-sans text-[14px] font-semibold">La saison 3</p>
        </router-link>
        <router-link to="/Saison4">
          <p class="font-open-sans text-[14px] font-semibold">La saison 4</p>
        </router-link>
      </div>
    </div>
    <router-link to="/LesPersonnages">
      <p class="my-5 font-open-sans text-[14px] font-semibold">Les personnages</p>
    </router-link>
    <router-link to="/Monavis">
      <p class="font-open-sans text-[14px] font-semibold">Mon avis</p>
    </router-link>
    <router-link to="/Mentionslegales">
      <p class="mt-5 font-open-sans text-[14px] font-semibold">Mentions légales</p>
    </router-link>
  </div>

  <FooterComp class="mt-10" />
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import bouton from "../components/bouton.vue";
import chevronD from "../components/icons/chevronDroitRouge.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: {
    HeaderComp,
    bouton,
    chevronD,
    FooterComp,
  },
};
</script>