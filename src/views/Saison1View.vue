<template>
  <header>
    <HeaderComp image="/public/saison/saison1-1.jpg" texte="La saison 1" />
  </header>

  <p class="mx-10 text-center font-open-sans text-[14px]">
    Ici vous trouverez une présentation rapide de la saison 1, ainsi que les personnages importants qui apparaissent lors de cette saison.
  </p>

  <div class="mx-2 my-5 flex gap-2">
    <img class="w-1/2 rounded-lg" src="/public/saison/saison1-2.jpg" alt="image arrivée sur Terre" />
    <p class="w-1/2 font-open-sans text-[14px]">
      La saison 1 raconte l'arrivée, l'installation et l'acclimatation du groupe des 100 sur Terre sans loi et sans adulte.
    </p>
  </div>
  <p class="font-open-sans text-[14px]">
    Ils vont se rendre compte des difficultés de la vie sur la planète qui leur réserve pleins de surprises... Nous suivons aussi la vie qui
    continue sur l'Arche et qui se fait de plus en plus difficle avec un problème d'oxygène.
  </p>

  <cardPresentG
    image="/public/lespersonnages/lespersonnages2.jpg"
    titre="Clarke Griffin par Eliza Taylor"
    texte1="Clarke est l'héroine de l'histoire : en effet, c'est principalement autour d'elle que tourne l'histoire de la série."
    texte2="Elle va être amenée à se surpasser un peu plus à chaque saison. Elle fait parti du groupe des jeunes délinquants pour tahison. Auparavant elle fesait des études de médecines et a donc de bonnes bases dans ce domaine. Son père est mort."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages3.jpg"
    titre="Bellamy Blake par Bob Morley"
    texte1="Bellamy est le frère d'Octavia."
    texte2="Leur mère ayant été condamnée à mort car elle a enfreint une règle, c'est lui qui a élevé sa petite soeur. Il joue un rôle central qui lui vaut la deuxième place dans les personnages les plus importants."
    class="mt-5"
  />

  <cardPresentG
    image="/public/lespersonnages/lespersonnages4.jpg"
    titre="Octavia Blake par Marie Avgeropoulos"
    texte1="Octavia est la soeur têtue de Bellamy."
    texte2="Au fur et à mesure des saisons, elle va se rendre compte qu'elle se sent plus appartenir au peuple des arbres qu'à son peuple natal, le peuple du ciel. Cette prise de consience est notamment engendrée par l'appartenance de Lincoln, son petit ami, au peuple des arbres."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages5.jpg"
    titre="Lincoln par Ricky Whittle"
    texte1="Il appartient au peuple des arbres mais est rejeté."
    texte2="Lincoln est un guerrier de sa tribu. Il va donc essayer de s'intégrer au peuple du ciel. Il va beaucoup participer à l'évolution psychologique de Octavia."
    class="mt-5"
  />

  <cardPresentG
    image="/public/lespersonnages/lespersonnages6.jpg"
    titre="Raven Reyes par Lindsey Morgan"
    texte1="Raven est une mécanicienne au caractère bien trempé."
    texte2="Elle ne faisait pas partie des 100 envoyés sur Terre : c'est par amour pour Finn qu'elle est partie seule dans une fusée pour le retrouver. Elle aussi sera amenée à se surpasser au fur et à mesure des saisons.
"
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages7.jpg"
    titre="Finn Collins par Thomas McDonell"
    texte1="Finn est le petit ami de Raven."
    texte2="C'est à la suite de son voyage sur Terre avec les 100 qu'il tombe éperdument amoureux de Clarke. Il est le moralisateur du groupe des 100 au début de la saison mais va se laisser détruire par son amour pour Clarke petit à petit."
    class="mt-5"
  />

  <cardPresentG
    image="/public/lespersonnages/lespersonnages8.jpg"
    titre="Jasper Jordan par Devon Bostick"
    texte1="Jasper est le meilleur ami de Monty."
    texte2="Dans la saison 1, il est timide, a peu confiance en lui et est amoureux d'Octavia. Cependant, une rencontre dans la saison 2 va totalement changer sa vie au point qu'elle ne sera plus jamais pareil."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages9.jpg"
    titre="Monty Green par Christopher Larkin"
    texte1="Monty est le meilleur ami de Jasper."
    texte2="C'est un ingénieur et scientifique qui peut sembler avoir un rôle secondaire dans la saison 1, mais jouera un rôle très important au fil des saisons, particulièrement dans la saison 5."
    class="mt-5"
  />

  <cardPresentG
    image="/public/lespersonnages/lespersonnages10.jpg"
    titre="John Murphy par Richard Harmon"
    texte1="Murphy comme ses amis le surnomme fait parti des 100 et joue dès le début le méchant des 100."
    texte2=" Il est très solitaire, fait passer son propre intérêt avant celui des autres, et aime mettre les gens devant leurs erreurs, les faire culpabiliser,..."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages11.jpg"
    titre="Abby Griffin par Paige Turco"
    texte1="C'est la mère de Clarke."
    texte2="La relation entre mère et fille est difficile lorsque Clarke comprend que c'est sa mère et non son meilleur ami qui a dénoncé son père aux autorités et donc qui est la responsable de sa condamnation à mort."
    class="mt-5"
  />

  <cardPresentG
    image="/public/lespersonnages/lespersonnages12.jpg"
    titre="Marcus Kane par Henry Ian Cusick"
    texte1="Marcus a une âme de commandant depuis le début de la série."
    texte2="Il va beaucoup évoluer au fil des saisons et notamment grâce à Abby. Il veut la paix à tout prix et faire le bien."
    class="mt-5"
  />
  <cardPresentD
    image="/public/lespersonnages/lespersonnages13.jpg"
    titre="Thelonious Jaha par Isaiah Washington"
    texte1="Jaha est le commandant de l'Arche et c'est lui qui va envoyer les 100 sur Terre."
    texte2="Il sera tout au long de la série un facteur de problèmes et de péripéties."
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