<template>
  <header>
    <HeaderComp image="/public/saison/saison4-1.jpg" texte="La saison 4" />
  </header>

  <p class="mx-10 text-center font-open-sans text-[14px]">
    Ici vous trouverez une présentation rapide de la saison 4, ainsi que les personnages importants qui apparaissent lors de cette saison.
  </p>

  <div class="mx-2 my-5 flex gap-2">
    <img class="w-1/2 rounded-lg object-cover" src="/public/saison/saison2-2.jpg" alt="image scène de la série" />
    <p class="w-1/2 font-open-sans text-[14px]">
      La saison 4 est l'arrivée d'une vague radioactive qui va rendre la Terre inhabitable pendant minimum 5 ans.
    </p>
  </div>
  <p class="mx-2 font-open-sans text-[14px]">
    Les 100 vont donc devoir trouver une solution et s'organiser avec les autres clans pour essayer de sauver un maximum de personnes.
  </p>

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

  <router-link to="LesPersonnages">
    <bouton class="m-auto w-1/2">Les personnages</bouton>
  </router-link>
  <FooterComp class="mt-10" />
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import cardPresentG from "../components/cardPresentG.vue";
import cardPresentD from "../components/cardPresentD.vue";
import bouton from "../components/bouton.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: {
    HeaderComp,
    cardPresentG,
    cardPresentD,
    bouton,
    FooterComp,
  },
};
</script>