<template>
  <header>
    <HeaderComp image="../../public/lessaisons/saisons1.jpg" texte="Les saisons"></HeaderComp>
  </header>

  <body>
    <div class="mx-10">
      <p class="text-center font-open-sans text-[14px]">
        Voici la présentation des saisons 1 à 4 avec le contexte et les nouveaux personnages de chaque, le tout sans spoil !
      </p>
      <cardSaison
        class="my-5"
        image="../../public/lessaisons/saisons2.jpg"
        texte="Nombres d'épisodes : 13"
        saison="Saison 1"
        texte2="Date de sortie : 19 mars 2014"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <router-link to="/Saison1">
        <bouton class="mx-14">Saison 1</bouton>
      </router-link>
      <cardSaison
        class="my-5"
        image="../../public/lessaisons/saisons3.jpg"
        texte="Nombres d'épisodes : 16"
        saison="Saison 2"
        texte2="Date de sortie : 22 octobre 2014"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <router-link to="/Saison2">
        <bouton class="mx-14">Saison 2</bouton>
      </router-link>
      <cardSaison
        class="my-5"
        image="../../public/lessaisons/saisons4.jpg"
        texte="Nombres d'épisodes : 16"
        saison="Saison 3"
        texte2="Date de sortie : 21 janvier 2016"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <router-link to="/Saison3">
        <bouton class="mx-14">Saison 3</bouton>
      </router-link>
      <cardSaison
        class="my-5"
        image="../../public/lessaisons/saisons5.jpg"
        texte="Nombres d'épisodes : 13"
        saison="Saison 4"
        texte2="Date de sortie : 1 février 2017"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <router-link to="/Saison4">
        <bouton class="mx-14">Saison 4</bouton>
      </router-link>
    </div>
  </body>
  <FooterComp class="mt-10" />
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import cardSaison from "../components/cardSaison.vue";
import bouton from "../components/bouton.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: {
    HeaderComp,
    cardSaison,
    bouton,
    FooterComp,
  },
};
</script>