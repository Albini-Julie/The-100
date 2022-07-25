<template>
  <div class="flex flex-col items-center gap-5 bg-white p-5">
    <router-link to="/">
      <img class="h-[117px] w-[169px]" src="../components/icons/logo-noir.svg" alt="site site web" />
    </router-link>
    <div class="flex items-center justify-center gap-5">
      <a href="https://www.instagram.com/"> <logoInsta /></a>
      <a href="https://twitter.com/?lang=fr"><logoTwitter /></a>
      <a href="https://www.facebook.com/"><logoFacebook /></a>
    </div>
    <router-link to="/MentionsLegales"><p class="font-open-sans">Mentions légales</p></router-link>
  </div>
</template>

<script>
import logoInsta from "../components/icons/logoInsta.vue";
import logoTwitter from "../components/icons/logoTwitter.vue";
import logoFacebook from "../components/icons/logoFacebook.vue";
export default {
  components: {
    logoInsta,
    logoTwitter,
    logoFacebook,
  },
};
</script>
