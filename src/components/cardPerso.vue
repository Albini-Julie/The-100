<template>
  <div class="border-2 border-gray-900 dark:border-white">
    <img class="" :src="image" alt="image personnage" />
    <div class="ml-1">
      <p class="font-open-sans text-[20px] xl:text-[25px]">Prénom : {{ prenom }}</p>
      <p class="font-open-sans text-[20px] xl:text-[25px]">Nom : {{ nom }}</p>
      <p class="font-open-sans text-[20px] xl:text-[25px]">Surnoms : {{ surnom }}</p>
      <p class="font-open-sans text-[20px] xl:text-[25px]">Qualité : {{ qualite }}</p>
      <p class="font-open-sans text-[20px] xl:text-[25px]">Défaut : {{ defaut }}</p>
      <p class="font-open-sans text-[20px] xl:text-[25px]">Saisons : {{ saisons }}</p>
      <p class="font-open-sans text-[20px] xl:text-[25px]">Par : {{ par }}</p>
    </div>
    <div class="my-2 flex justify-center gap-10">
      <poubelle class="dark:hidden" />
      <poubelleBlanc class="hidden dark:block" />
      <crayon class="dark:hidden" />
      <crayonBlanc class="hidden dark:block" />
    </div>
  </div>
</template>


<script>
import poubelle from "../components/icons/poubelle.vue";
import crayon from "../components/icons/crayon.vue";
import poubelleBlanc from "../components/icons/poubelleBlanc.vue";
import crayonBlanc from "../components/icons/crayonBlanc.vue";
export default {
  components: {
    poubelle,
    crayon,
    poubelleBlanc,
    crayonBlanc,
  },
  props: {
    image: String,
    prenom: String,
    nom: String,
    surnom: String,
    qualite: String,
    defaut: String,
    saisons: String,
    par: String,
  },
};
</script>