<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderSaison4.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderSaison4.jpg" />
    </div>
  </header>

  <p class="mx-10 text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
    Ici vous trouverez une présentation rapide de la saison 4, ainsi que les personnages importants qui apparaissent lors de cette saison.
  </p>

  <div class="mx-2 my-5 flex gap-2 sm:items-center">
    <img class="w-1/2 rounded-lg object-cover" src="/public/saison/saison2-2.jpg" alt="image scène de la série" />
    <div class="w-1/2 xl:hidden">
      <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        La saison 4 est l'arrivée d'une vague radioactive qui va rendre la Terre inhabitable pendant minimum 5 ans.
      </p>
    </div>
    <div class="hidden w-1/2 xl:block">
      <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        La saison 4 est l'arrivée d'une vague radioactive qui va rendre la Terre inhabitable pendant minimum 5 ans.
      </p>
      <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        Les 100 vont donc devoir trouver une solution et s'organiser avec les autres clans pour essayer de sauver un maximum de personnes.
      </p>
    </div>
  </div>
  <div class="xl:hidden">
    <p class="mx-2 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
      Les 100 vont donc devoir trouver une solution et s'organiser avec les autres clans pour essayer de sauver un maximum de personnes.
    </p>
  </div>

  <cardPresentG
    image="/public/lespersonnages/lespersonnages29.jpg"
    titre="Gaia par Tati Gabrielle"
    texte1="Gaia est la fille de Indra."
    texte2="Elle croit en les Hedas et la flamme contrairement à sa mère qui pourtant élevée dans cette esprit s'en ai petit à petit détachée. Indra va devenir la gardienne de la flamme et va prendre ce rôle très à coeur."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages30.jpg"
    titre="Ilian par Chai Romruen"
    texte1="Ilian est une victime de A.L.I.E : en effet, sous l'influence de la pastille laveuse de cerveau, il va tuer toute sa famille qui refuse de la prendre."
    texte2="Il aura dû mal à s'en remettre et va chercher à se venger en s'en prenant à Skaikru qui lui a donné la pastille. Il va beaucoup se rapprocher de Octavia."
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