<template>
  <div class="border-2 border-gray-900">
    <img class="" :src="image" alt="image personnage" />
    <div class="ml-1">
      <p class="font-open-sans text-[14px]">Prénom : {{ prenom }}</p>
      <p class="font-open-sans text-[14px]">Nom : {{ nom }}</p>
      <p class="font-open-sans text-[14px]">Surnoms : {{ surnom }}</p>
      <p class="font-open-sans text-[14px]">Qualité : {{ qualite }}</p>
      <p class="font-open-sans text-[14px]">Défaut : {{ defaut }}</p>
      <p class="font-open-sans text-[14px]">Saisons : {{ saisons }}</p>
      <p class="font-open-sans text-[14px]">Par : {{ par }}</p>
    </div>
    <div class="my-2 flex justify-center gap-5">
      <poubelle />
      <crayon />
    </div>
  </div>
</template>


<script>
import poubelle from "../components/icons/poubelle.vue";
import crayon from "../components/icons/crayon.vue";
export default {
  components: {
    poubelle,
    crayon,
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