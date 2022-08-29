<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderAccueil.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderAccueil.jpg" />
    </div>
  </header>
  <body class="dark:bg-gray-900 dark:text-white">
    <div class="mx-2 flex h-max gap-3 md:items-center">
      <img class="w-2/5 rounded-lg object-cover lg:w-3/5" src="/public/accueil/accueil2.jpg" alt="image radiation" />
      <div class="w-3/5 lg:w-2/5">
        <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
          The 100 est une série télévisée américaine produite par Jason Rothenberg et directement inspirée des romans éponymes de Kass
          Morgans.
        </p>
        <div class="flex justify-center">
          <a href="https://www.youtube.com/watch?v=ugbF39-WHLE" alt="lien bande annonce">
            <bouton class="mx-5 mt-5 text-[14px] xl:text-[25px]">Bande annonce</bouton>
          </a>
        </div>
      </div>
    </div>

    <div class="my-8 bg-gray-900 p-3">
      <img class="rounded-lg" src="../../public/accueil/accueil3.jpg" alt="image vaisseau" />
      <div class="items-center lg:flex">
        <p class="mt-2 mb-5 font-open-sans text-[14px] text-white md:text-[20px] lg:w-2/3 xl:text-[25px]">
          A la suite d'une catastrophe nucléaire sur Terre, un groupe d'humains partent dans l'espace dans un ''vaisseau'', l'Arche
          surlequel une véritable communauté va s'installer. d'envoyer 100 adolescents criminels pour vérifier.
        </p>
        <div class="justify-center md:flex lg:w-1/3">
          <router-link to="/LesSaisons">
            <boutonBlanc class="text-[14px] xl:text-[25px]">Les saisons</boutonBlanc>
          </router-link>
        </div>
      </div>
    </div>

    <div class="xl-mx-5 mx-2 mb-10 flex h-max gap-3 dark:bg-gray-900 md:items-center">
      <div class="w-3/5 lg:w-2/5">
        <p class="font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
          Au bout de 97 ans, la Terre devrait être à nouveau habitable: afin de s'en assurer, les dirigeants de l'Arche décide
        </p>
        <div class="flex justify-center">
          <router-link to="LesPersonnages">
            <bouton class="mx-5 mt-5 text-[14px] xl:text-[25px]">Les personnages</bouton>
          </router-link>
        </div>
      </div>
      <img class="w-2/5 rounded-lg object-cover lg:w-3/5" src="/public/accueil/accueil4.jpg" alt="image radiation" />
    </div>

    <FooterComp />
  </body>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
import bouton from "../components/bouton.vue";
import boutonBlanc from "../components/boutonBlanc.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
export default {
  components: {
    HeaderComp,
    FooterComp,
    bouton,
    boutonBlanc,
    HeaderGrand,
  },
};
</script>