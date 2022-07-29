<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderSaison3.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderSaison3.jpg" />
    </div>
  </header>

  <body class="dark:bg-gray-900 dark:text-white">
    <p class="mx-10 text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
      Ici vous trouverez une présentation rapide de la saison 3, ainsi que les personnages importants qui apparaissent lors de cette saison.
    </p>

    <div class="mx-2 my-10 flex gap-2 sm:items-center xl:my-24">
      <img class="w-1/2 rounded-lg object-cover" src="/public/saison/saison3-2.jpg" alt="image scène de la série" />
      <p class="w-1/2 font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        La saison 3 s'interesse à une nouvelle péripétie dans la vie des 100 : en effet, une intelligence artificiel va semer la terreur sur
        Terre puisqu'elle lave littéralement le cerveau des gens.
      </p>
    </div>

    <cardPresentG
      image="/public/lespersonnages/lespersonnages20.jpg"
      titre="Echo par Tasya Teles"
      texte1="Echo fait partie du clan des glaces ou Azgeda."
      texte2="C'est une espionne fidèle à son clan qui se méfie des Skaikru. Elle va beaucoup se rapprocher de Bellamy et évoluer à ses côté."
      class="mt-5"
    />
    <cardPresentD
      image="/public/lespersonnages/lespersonnages21.jpg"
      titre="Roan par Zach McGowan"
      texte1="Roan est le prince puis roi de la Nation des glaces ou Azgeda."
      texte2="Il admire Clarke qui ne défend pas que son peuple et va évoluer à ses côtés en lui faisant énormement confiance même si son peuple est contre."
      class="mt-5"
    />

    <cardPresentG
      image="/public/lespersonnages/lespersonnages22.jpg"
      titre="Luna par Nadia Hilker"
      texte1="Luna est une nightblood qui a fuit son destin de Heda car elle a dû tuer son frère lui aussi nightblood pour avoir le pouvoir lors du conclave."
      texte2="Elle a créer son propre clan, les Floukru sur une plaque pétrolière. Il pour la paix se méfie beaucoup des autres clans et préfère rester à l'écart."
      class="mt-5"
    />
    <cardPresentD
      image="/public/lespersonnages/lespersonnages23.jpg"
      titre="Becca Franco par Erica Cerra"
      texte1="Becca est une scientifique à l'origine de A.L.I.E, une IA pour améliorer la vie humaine, mais qui échouer."
      texte2="Becca va être exclue de la station spatiale et envoyée sur Terre. Puisque que c'est une Nightblood, elle survit et devient la chef des terriens vivants. Elle est à l'origine du mythe Heda."
      class="mt-5"
    />

    <cardPresentG
      image="/public/lespersonnages/lespersonnages24.jpg"
      titre="A.L.I.E par Erica Cerra"
      texte1="A.L.I.E est une IA qui a crée une guerre nucléaire sur Terre qui l'a rendu inhabitable."
      texte2="Elle va manipuler Jaha en le convinquant que La ville lumière est une vie meilleure pour les gens et qu'il faut absolument qu'ils l'intègent. Elle va créer son empire avec des pastilles qui lavent les cerveaux.
"
      class="mt-5"
    />
    <cardPresentD
      image="/public/lespersonnages/lespersonnages25.jpg"
      titre="Charles Pike par Michael Beach"
      texte1="Il sera à l'origine de nombreux génicides terriens."
      texte2="Pike est un etrêmiste qui veut prendre le pouvoir à Clarke car il est contre l'entente avec les autres clans."
      class="mt-5"
    />

    <cardPresentG
      image="/public/lespersonnages/lespersonnages26.jpg"
      titre="Harper par Chelsey Reist"
      texte1="Elle va beaucoup se rapprocher de Monty."
      texte2="Harper fait dès le début partie des 100 mais devient un personnage important à partir de la saison 3.
"
      class="mt-5"
    />
    <cardPresentD
      image="/public/lespersonnages/lespersonnages27.jpg"
      titre="Titus par Neil Sandilands"
      texte1=""
      texte2="Titus est le gardien de la flamme pendant le règne de Lexa pour qui il a une grande admiration même si il n'approuve pas toujours ses choix notamment lorqu'il s'agit de coopérer avec Clarke."
      class="mt-5"
    />

    <cardPresentG
      image="/public/lespersonnages/lespersonnages28.jpg"
      titre="Ontari par Rhiannon Fish"
      texte1="Ontari est une guerrière de la Nation des glaces, nightblood, elle va succéder à Lexa par la force."
      texte2="Elle est avide de pouvoir, têtue mais influençable et trop jeune pour commander : elle se fait rapidement rattraper par la difficulté de prendre des choix pour un royaume et de s'affirmer vis à vis aux autres chefs de tribus.
"
      class="mt-5"
    />

    <div class="my-10 flex justify-center">
      <router-link to="LesPersonnages">
        <bouton class="m-auto">Les personnages</bouton>
      </router-link>
    </div>
    <FooterComp class="mt-10" />
  </body>
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