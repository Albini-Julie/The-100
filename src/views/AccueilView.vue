<template>
  <header>
    <HeaderComp image="../../public/accueil/accueil1.jpg" texte="La série apocalyptique"></HeaderComp>
  </header>
  <body class="">
    <div class="mx-2 flex h-max gap-3">
      <img class="w-2/5 rounded-lg object-cover" src="/public/accueil/accueil2.jpg" alt="image radiation" />
      <div class="w-3/5">
        <p class="font-open-sans text-[14px]">
          The 100 est une série télévisée américaine produite par Jason Rothenberg et directement inspirée des romans éponymes de Kass
          Morgans.
        </p>
        <a href="https://www.youtube.com/watch?v=ugbF39-WHLE" alt="lien bande annonce">
          <bouton class="mx-5 mt-5 text-[14px]">Bande annonce</bouton>
        </a>
      </div>
    </div>

    <div class="my-8 bg-gray-900 p-3">
      <img class="rounded-lg" src="../../public/accueil/accueil3.jpg" alt="image vaisseau" />
      <p class="mt-2 mb-5 font-open-sans text-[14px] text-white">
        A la suite d'une catastrophe nucléaire sur Terre, un groupe d'humains partent dans l'espace dans un ''vaisseau'', l'Arche surlequel
        une véritable communauté va s'installer. d'envoyer 100 adolescents criminels pour vérifier.
      </p>
      <router-link to="/LesSaisons">
        <boutonBlanc>Les saisons</boutonBlanc>
      </router-link>
    </div>

    <div class="mx-2 mb-10 flex h-max gap-3">
      <div class="w-3/5">
        <p class="font-open-sans text-[14px]">
          Au bout de 97 ans, la Terre devrait être à nouveau habitable: afin de s'en assurer, les dirigeants de l'Arche décide
        </p>
        <router-link to="LesPersonnages">
          <bouton class="mx-5 mt-5 text-[14px]">Les personnages</bouton>
        </router-link>
      </div>
      <img class="w-2/5 rounded-lg object-cover" src="/public/accueil/accueil4.jpg" alt="image radiation" />
    </div>
  </body>
  <FooterComp />
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
import bouton from "../components/bouton.vue";
import boutonBlanc from "../components/boutonBlanc.vue";
export default {
  components: {
    HeaderComp,
    FooterComp,
    bouton,
    boutonBlanc,
  },
};
</script>