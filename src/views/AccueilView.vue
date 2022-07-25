<template>
  <header>
    <HeaderComp image="../../public/accueil/accueil1.jpg" texte="La série apocalyptique"></HeaderComp>
  </header>
  <body></body>
  <FooterComp />
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>