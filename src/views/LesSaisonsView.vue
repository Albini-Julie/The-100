<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderLesSaisons.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderLesSaisons.jpg" />
    </div>
  </header>

  <body>
    <div>
      <p class="mx-10 text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        Voici la présentation des saisons 1 à 4 avec le contexte et les nouveaux personnages de chaque, le tout sans spoil !
      </p>
      <cardSaison
        class="my-10"
        image="../../public/lessaisons/saisons2.jpg"
        texte="Nombres d'épisodes : 13"
        saison="Saison 1"
        texte2="Date de sortie : 19 mars 2014"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <div class="flex justify-center">
        <router-link to="/Saison1">
          <bouton class="mx-24">Saison 1</bouton>
        </router-link>
      </div>
      <cardSaison
        class="my-10"
        image="../../public/lessaisons/saisons3.jpg"
        texte="Nombres d'épisodes : 16"
        saison="Saison 2"
        texte2="Date de sortie : 22 octobre 2014"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <div class="flex justify-center">
        <router-link to="/Saison2">
          <bouton class="mx-24">Saison 2</bouton>
        </router-link>
      </div>
      <cardSaison
        class="my-10"
        image="../../public/lessaisons/saisons4.jpg"
        texte="Nombres d'épisodes : 16"
        saison="Saison 3"
        texte2="Date de sortie : 21 janvier 2016"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <div class="flex justify-center">
        <router-link to="/Saison3">
          <bouton class="mx-24">Saison 3</bouton>
        </router-link>
      </div>
      <cardSaison
        class="my-10"
        image="../../public/lessaisons/saisons5.jpg"
        texte="Nombres d'épisodes : 13"
        saison="Saison 4"
        texte2="Date de sortie : 1 février 2017"
        texte3="Tournage : principalement à Vancouver (Canada)"
      />
      <div class="flex justify-center">
        <router-link to="/Saison4">
          <bouton class="mx-24">Saison 4</bouton>
        </router-link>
      </div>
    </div>
  </body>
  <FooterComp class="mt-10" />
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import cardSaison from "../components/cardSaison.vue";
import bouton from "../components/bouton.vue";
import FooterComp from "../components/FooterComp.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
export default {
  components: {
    HeaderComp,
    cardSaison,
    bouton,
    FooterComp,
    HeaderGrand,
  },
};
</script>