<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderSaison2.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderSaison2.jpg" />
    </div>
  </header>

  <p class="mx-10 text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
    Ici vous trouverez une présentation rapide de la saison 2, ainsi que les personnages importants qui apparaissent lors de cette saison.
  </p>

  <div class="mx-2 my-5 flex gap-2 sm:items-center">
    <img class="w-1/2 rounded-lg object-cover" src="/public/saison/saison2-2.jpg" alt="image scène de la série" />
    <div class="w-1/2 xl:hidden">
      <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        La saison 2 est la découverte pour les 100 d'un nouveau clan : le clan de la montagne qui va les séparer et leur donner du fil à
        retordre.
      </p>
    </div>
    <div class="hidden w-1/2 xl:block">
      <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        La saison 2 est la découverte pour les 100 d'un nouveau clan : le clan de la montagne qui va les séparer et leur donner du fil à
        retordre.
      </p>
      <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        Cette saison est aussi caractérisée par l'arrivée des habitants de l'Arche qui les rejoingnent sur Terre.
      </p>
    </div>
  </div>
  <div class="xl:hidden">
    <p class="mx-2 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
      Cette saison est aussi caractérisée par l'arrivée des habitants de l'Arche qui les rejoingnent sur Terre.
    </p>
  </div>

  <cardPresentG
    image="/public/lespersonnages/lespersonnages14.jpg"
    titre="Lexa par Alycia Debnam-Carey"
    texte1="C'est la commandante des Terriens."
    texte2="Elle est très puissante et très forte au combat. Elle va évoluer fortement au côté de Clarke qui va également évoluer à ses côtés."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages15.jpg"
    titre="Maya Vie par Eve Harlow"
    texte1="Elle va beaucoup se rapprocher de Jasper."
    texte2="Elle fait partie du clan des montagnes mais trahie son clan en aidant Clarke et ses amis à s'échapper car elle est contre les actes dis de survie pratiqués par son clan."
    class="mt-5"
  />

  <cardPresentG
    image="/public/lespersonnages/lespersonnages16.jpg"
    titre="Dante Wallace par Raymond John Barry"
    texte1="C'est le président du clan des montagnes."
    texte2="Il accueille à bras ouvert les 100, mais se fait trahir par son fils qui va créer une véritable guerre."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages17.jpg"
    titre="Cage Wallace par Johnny Whitworth"
    texte1="C'est le fils du président des montagnards."
    texte2="Il est contre l'accueil dans 100 dans le bucker et va organiser un coup d'état pour prendre le pouvoir de son père."
    class="mt-5"
  />

  <cardPresentG
    image="/public/lespersonnages/lespersonnages18.jpg"
    titre="Indra Adina Porter"
    texte1="C'est une terrienne faisant parti du clan des Wood."
    texte2="Elle fait parti des hauts placés : elle conseille les commandants et prend souvent en charge les plans de guerre. Elle va beaucoup se rapprocher de Octavia et la considérer comme sa fille.
"
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages19.jpg"
    titre="Emori par Luisa D'Oliveira"
    texte1="Emori est une terrienne nomade et n'a pas vraiment de clan en raison de sa déformation à l'une de ses mains qui l'a fait rejetée par son peuple."
    texte2="Emori est une terrienne nomade et n'a pas vraiment de clan en raison de sa déformation à l'une de ses mains qui l'a fait rejetée par son peuple."
    class="mt-5"
  />

  <div class="my-10 flex justify-center">
    <router-link to="LesPersonnages">
      <bouton class="m-auto">Les personnages</bouton>
    </router-link>
  </div>
  <FooterComp class="mt-10" />
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import cardPresentG from "../components/cardPresentG.vue";
import cardPresentD from "../components/cardPresentD.vue";
import bouton from "../components/bouton.vue";
import FooterComp from "../components/FooterComp.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
export default {
  components: {
    HeaderComp,
    cardPresentG,
    cardPresentD,
    bouton,
    FooterComp,
    HeaderGrand,
  },
};
</script>