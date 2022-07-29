<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderMonAvis.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderMonAvis.jpg" />
    </div>
  </header>

  <body class="dark:bg-gray-900 dark:text-white">
    <p class="mx-10 mt-10 text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
      Je vais vous donner dans cette page mon avis sur la série, mon personnage préféré, et ma saison préférée.
    </p>
    <img class="my-5" src="/public/monavis/monavis2.jpg" alt="image des héros" />
    <p class="mx-2 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
      La série The 100 est de loin ma série préférée car même si je ne suis pour l'instant qu'à la saison 6, je la trouve très interessante
      avec une histoire accrochante, des acteurs qui jouent bien leurs rôles, des effets spéciaux très réussis et tout le temps de nouvelles
      péripéties qui permettent de ne pas se lasser et d'être toujours surpris.
    </p>
    <p class="mx-2 my-5 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
      Ce que j'aime aussi est le fait, qui se retrouve dans de nombreuses autres séries, que l'on s'attache réellement aux personnages au
      point que l'on a vraiment l'impression de les connaitre.
    </p>

    <div class="mx-2 mb-10 flex h-max items-center gap-3">
      <p class="w-1/2 font-open-sans text-[14px] md:text-[20px] lg:w-2/3 xl:text-[25px]">
        Je conseille vraiment cette série aux personnes fans de séries de science fiction et de sensations fortes, et un plus qui rajoute
        beaucoup je trouve, est de regarder la série en anglais sous titré en français, pour entendre les vraies voix des acteurs ce qui
        fait que l'on a l'impression de mieux connaitre les personnages.
      </p>
      <img class="w-1/2 rounded-lg lg:w-1/3" src="/public/monavis/monavis3.jpg" alt="affiche des acteurs" />
    </div>

    <img src="/public/monavis/monavis4.jpg" alt="image Octavia" />

    <div class="mx-2 my-5 flex gap-2 md:items-center">
      <img class="w-1/2 rounded-lg object-cover" src="/public/monavis/monavis5.jpg" alt="image Octavia" />
      <p class="w-1/2 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        Au niveau de mon personnage préféré, il s'agit pour l'instant de Octavia à laquelle je m'identifie réellement, je la trouve forte,
        courageuse, et en même temps sensible et touchante. Elle a ses qualités et ses défaults qui font d'elle une héroine accessible.
      </p>
    </div>

    <p class="mx-5 flex justify-center text-center font-open-sans font-semibold md:text-[25px] xl:my-20 xl:text-[30px]">
      Je trouve toutes les saisons de The 100 supers à leurs manières
    </p>

    <div class="mx-2 my-5 flex items-center gap-2">
      <div class="flex w-1/2 flex-col lg:w-2/3">
        <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
          Cependant, mon coup de coeur se porte sur la saison 5 dont je n’ai malheureusement pas pu parler dans ce site web.
        </p>
        <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
          Il s’agit de ma saison préférée car beaucoup de personnage évolue, et on peut d’ailleurs observer leur avancée depuis
          l’apocalypse.
        </p>
        <div class="hidden xl:block">
          <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
            Cette série m’a fait penser à Hunger Game qui est un film que j’apprécie particulièrement également et dans lequel des personnes
            de toutes âges sont tirées au sort pour aller se battre dans une arène-forêt
          </p>
        </div>
      </div>
      <img class="w-1/2 rounded-lg lg:w-1/3" src="/public/monavis/monavis6.jpg" alt="affiche des acteurs" />
    </div>

    <div class="xl:hidden">
      <p class="mx-2 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        Cette série m’a fait penser à Hunger Game qui est un film que j’apprécie particulièrement également et dans lequel des personnes de
        toutes âges sont tirées au sort pour aller se battre dans une arène-forêt
      </p>
    </div>

    <FooterComp class="mt-10" />
  </body>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
export default {
  components: {
    HeaderComp,
    FooterComp,
    HeaderGrand,
  },
};
</script>