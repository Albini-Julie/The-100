<template>
  <header>
    <div class="lg:hidden">
      <HeaderComp image="/public/header/HeaderLesPersonnages.jpg"></HeaderComp>
    </div>
    <div class="hidden lg:block">
      <HeaderGrand class="my-10" image="/public/header/HeaderLesPersonnages.jpg" />
    </div>
  </header>

  <body class="dark:bg-gray-900 dark:text-white">
    <div class="mx-10">
      <p class="text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">Vous modifier ce personnage !</p>
    </div>

    <form enctype="multipart/form-data" @submit.prevent="updatePerso">
      <div class="m-10 flex"></div>
      <div>
        <div>
          <div class="flex items-center">
            <div class="flex justify-center">
              <img class="w-3/4" :src="imageData" />
            </div>

            <div class="flex w-2/4 flex-col items-center">
              <div>
                <div class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">
                  <span>Prénom</span>
                </div>
                <input
                  class="form-control border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  placeholder="Prénom du personnage"
                  v-model="perso.Prénom"
                  required
                />
              </div>
              <br />
              <div>
                <div class="font-work-sans text-[20px] font-semibold md:text-[20px] lg:w-[500px] xl:text-[25px]">
                  <span>Nom</span>
                </div>
                <input
                  v-model="perso.Nom"
                  class="form-control form-control border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  placeholder="Nom du personnage"
                  key="required"
                />
              </div>
              <br />
              <div>
                <div>
                  <span class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">Surnoms</span>
                </div>
                <input
                  class="border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  v-model="perso.Surnoms"
                  placeholder="Surnoms du personnage"
                  required
                />
              </div>
              <br />
              <div>
                <div>
                  <span class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">Qualité</span>
                </div>
                <input
                  class="border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  v-model="perso.Qualité"
                  placeholder="Qualité du personnage"
                  required
                />
              </div>
              <br />
              <div>
                <div>
                  <span class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">Défaut</span>
                </div>
                <input
                  class="border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  v-model="perso.Défaut"
                  placeholder="Défaut du personnage"
                  required
                />
              </div>
              <br />
              <div>
                <div>
                  <span class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">Saisons</span>
                </div>
                <input
                  class="border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  v-model="perso.Saisons"
                  placeholder="Saisons du personnage"
                  required
                />
              </div>
              <br />
              <div>
                <div>
                  <span class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">Acteur</span>
                </div>
                <input
                  class="border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  v-model="perso.Par"
                  placeholder="Acteur du personnage"
                  required
                />
              </div>
              <br />
              <div>
                <div class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">
                  <span>Photo</span>
                </div>
                <input
                  class="form-control border-b-2 border-b-black md:text-[20px] lg:w-[500px] xl:text-[25px]"
                  type="file"
                  ref="file"
                  id="file"
                  @change="previewImage"
                />
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 flex justify-around">
        <button
          type="submit"
          class="
            form-control
            font-work-sans
            rounded-xl
            bg-purple-700
            py-2
            px-5
            text-[20px]
            font-semibold
            text-white
            md:text-[20px]
            xl:text-[25px]
          "
        >
          Modifier
        </button>
        <button
          class="
            form-control
            font-work-sans
            rounded-xl
            bg-green-700
            px-5
            py-2
            text-[20px]
            font-semibold
            text-white
            md:text-[20px]
            xl:text-[25px]
          "
        >
          <router-link to="/LesPersonnages">Cancel</router-link>
        </button>
      </div>
    </form>
    <FooterComp class="mt-10" />
  </body>
</template>


<script>
import HeaderComp from "../components/HeaderComp.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
import FooterComp from "../components/FooterComp.vue";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

// Storage
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";

export default {
  data() {
    return {
      imageData: null,
      perso: {
        Prénom: null,
        Nom: null,
        Surnoms: null,
        Qualité: null,
        Défaut: null,
        Saisons: null,
        Par: null,
        Image: null,
      },
      refPerso: null, // Référence du participant à modifier
      imgModifiee: false, // Indique si l'image du participant a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  components: {
    HeaderComp,
    HeaderGrand,
    FooterComp,
  },
  mounted() {
    console.log("id perso", this.$route.params.id);
    this.getPerso(this.$route.params.id);
  },
  methods: {
    async getPerso(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "Personnages", id);
      this.refPerso = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refPerso.exists()) {
        // Si oui on récupère ses données
        this.perso = this.refPerso.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.perso.Image;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Personnage inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "ImgPerso/" + this.perso.Image);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.perso.Image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async updatePerso() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "ImgPerso/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "ImgPerso/" + this.perso.Image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.perso.Image);
        });
      }
      // Dans tous les cas on met à jour le participant dans Firestore
      const firestore = getFirestore();
      // Modification du participant à partir de son id
      await updateDoc(doc(firestore, "Personnages", this.$route.params.id), this.perso);
      // redirection sur la liste des participants
      this.$router.push("/LesPersonnages");
    },
  },
};
</script>