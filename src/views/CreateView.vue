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
      <p class="text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">Vous allez ajouter un personnage à cette liste !</p>
    </div>

    <form enctype="multipart/form-data" @submit.prevent="createPerso">
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
                  class="form-control border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
                  placeholder="Prénom du personnage"
                  v-model="perso.Prénom"
                  required
                />
              </div>
              <br />
              <div>
                <div class="font-work-sans text-[20px] font-semibold md:text-[20px] xl:text-[25px]">
                  <span>Nom</span>
                </div>
                <input
                  v-model="perso.Nom"
                  class="form-control form-control border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
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
                  class="border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
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
                  class="border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
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
                  class="border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
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
                  class="border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
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
                  class="border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
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
                  class="form-control border-b-2 border-b-black md:text-[20px] xl:text-[25px]"
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
          Créer
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
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";

import HeaderComp from "../components/HeaderComp.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
import FooterComp from "../components/FooterComp.vue";

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
    };
  },
  components: {
    HeaderComp,
    HeaderGrand,
    FooterComp,
  },
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];

      this.perso.Image = this.file.name;

      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
          this.imageData = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },

    async createPerso() {
      const storage = getStorage();

      const refStorage = ref(storage, "ImgPerso/" + this.perso.Image);

      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        const db = getFirestore();
        const docRef = addDoc(collection(db, "Personnages"), this.perso);
      });
      this.$router.push("/LesPersonnages");
    },
  },
};
</script>