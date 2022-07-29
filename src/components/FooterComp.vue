<template>
  <div class="flex flex-col items-center gap-5 bg-white p-5 dark:bg-gray-900 dark:text-white">
    <router-link to="/">
      <img
        class="h-[117px] w-[169px] dark:hidden md:h-[221px] md:w-[318px] xl:h-[286px] xl:w-[412px]"
        src="../components/icons/logo-noir.svg"
        alt="site site web"
      />
      <img
        class="hidden h-[117px] w-[169px] dark:block md:h-[221px] md:w-[318px] xl:h-[286px] xl:w-[412px]"
        src="../components/icons/logo-blanc.svg"
        alt="site site web"
      />
    </router-link>
    <div class="flex items-center justify-center gap-5">
      <a href="https://www.instagram.com/"> <logoInsta class="dark:hidden" /> <logoInstaBlanc class="hidden dark:block" /></a>
      <a href="https://twitter.com/?lang=fr"><logoTwitter class="dark:hidden" /><logoTwitterBlanc class="hidden dark:block" /></a>
      <a href="https://www.facebook.com/"><logoFacebook class="dark:hidden" /><logoFacebookBlanc class="hidden dark:block" /></a>
    </div>
    <router-link to="/MentionsLegales"><p class="font-open-sans md:text-[20px] xl:text-[25px]">Mentions légales</p></router-link>
  </div>
</template>

<script>
import logoInsta from "../components/icons/logoInsta.vue";
import logoTwitter from "../components/icons/logoTwitter.vue";
import logoFacebook from "../components/icons/logoFacebook.vue";
import logoInstaBlanc from "../components/icons/logoInstaBlanc.vue";
import logoFacebookBlanc from "../components/icons/logoFacebookBlanc.vue";
import logoTwitterBlanc from "../components/icons/logoTwitterBlanc.vue";
export default {
  components: {
    logoInsta,
    logoTwitter,
    logoFacebook,
    logoInstaBlanc,
    logoFacebookBlanc,
    logoTwitterBlanc,
  },
};
</script>
