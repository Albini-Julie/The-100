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
      <p class="text-center font-open-sans text-[14px] md:text-[20px] xl:text-[25px]">
        Ici vous trouverez l’ensemble des personnages principaux présents entre la saison 1 et 4.
      </p>
    </div>

    <div class="flex items-center justify-around">
      <div class="my-10 flex justify-center dark:bg-gray-900 dark:text-white">
        <div class="flex items-center justify-between gap-10 rounded-lg border-2 border-gray-900 p-2 dark:border-white xl:gap-44">
          <input
            type="text"
            v-model="filter"
            placeholder="Chercher un personnage..."
            class="font-open-sans text-[14px] dark:bg-gray-900 md:text-[20px] xl:text-[25px]"
          />
          <button v-on:click="recherche = true">
            <loupe class="dark:hidden" />
            <loupeBlanc class="hidden dark:block" />
          </button>
        </div>
      </div>

      <div>
        <span title="Ajouter un personnage" />
        <router-link to="/Create">
          <plus class="dark:hidden" />
          <plusBlanc class="hidden dark:block" />
        </router-link>
      </div>
    </div>

    <div class="grid-auto-flow mx-5 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
      <div v-for="perso in filterByName" :key="perso.id">
        <div class="flex flex-col justify-center border-2 border-gray-900 dark:border-white">
          <img class="" :src="perso.Image" alt="image personnage" />
          <div class="ml-1">
            <p class="font-open-sans text-[20px] xl:text-[25px]">Prénom : {{ perso.Prénom }}</p>
            <p class="font-open-sans text-[20px] xl:text-[25px]">Nom : {{ perso.Nom }}</p>
            <p class="font-open-sans text-[20px] xl:text-[25px]">Surnoms : {{ perso.Surnoms }}</p>
            <p class="font-open-sans text-[20px] xl:text-[25px]">Qualité : {{ perso.Qualité }}</p>
            <p class="font-open-sans text-[20px] xl:text-[25px]">Défaut : {{ perso.Défaut }}</p>
            <p class="font-open-sans text-[20px] xl:text-[25px]">Saisons : {{ perso.Saisons }}</p>
            <p class="font-open-sans text-[20px] xl:text-[25px]">Par : {{ perso.Par }}</p>
          </div>
          <div class="my-2 flex justify-center gap-10">
            <span title="supprimer ce personnage">
              <RouterLink :to="{ name: 'Delete', params: { id: perso.id } }">
                <poubelle class="dark:hidden" />
                <poubelleBlanc class="hidden dark:block" />
              </RouterLink>
            </span>
            <span title="modifier ce personnage">
              <RouterLink :to="{ name: 'Update', params: { id: perso.id } }">
                <crayon class="dark:hidden" />
                <crayonBlanc class="hidden dark:block" />
              </RouterLink>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-center">
      <router-link to="/LesSaisons">
        <bouton class="">Les saisons</bouton>
      </router-link>
    </div>
    <FooterComp class="mt-10" />
  </body>
</template>

<script>
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";

import HeaderComp from "../components/HeaderComp.vue";
import search from "../components/search.vue";
import cardPerso from "../components/cardPerso.vue";
import bouton from "../components/bouton.vue";
import FooterComp from "../components/FooterComp.vue";
import HeaderGrand from "../components/HeaderGrand.vue";
import plus from "../components/icons/plus.vue";
import plusBlanc from "../components/icons/plusBlanc.vue";
import poubelle from "../components/icons/poubelle.vue";
import crayon from "../components/icons/crayon.vue";
import poubelleBlanc from "../components/icons/poubelleBlanc.vue";
import crayonBlanc from "../components/icons/crayonBlanc.vue";
import loupe from "../components/icons/loupe.vue";
import loupeBlanc from "../components/icons/loupeBlanc.vue";

export default {
  data() {
    return {
      listePerso: [],
      filter: "",
    };
  },
  computed: {
    orderByName: function () {
      // Parcours et tri des pays 2 à 2
      return this.listePerso.sort(function (a, b) {
        // Si le nom du pays est avant on retourne -1
        if (a.Prénom < b.Prénom) return -1;
        // Si le nom du pays est après on retourne 1
        if (a.Prénom > b.Prénom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (perso) {
          // On ne renvoie que les pays dont le nom contient
          // la chaine de caractère du filtre
          return perso.Prénom.toLowerCase().startsWith(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },
  mounted() {
    const local = this;
    this.getPerso(local);
  },
  methods: {
    async getPerso(local) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPerso = collection(firestore, "Personnages");
      // Liste des participants triés sur leur nom
      const q = query(dbPerso, orderBy("Prénom", "asc"));
      await onSnapshot(q, (snapshot) => {
        local.listePerso = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(local.listePerso);
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listePerso.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "ImgPerso/" + personne.Image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.Image = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
  components: {
    HeaderComp,
    search,
    cardPerso,
    bouton,
    FooterComp,
    HeaderGrand,
    plus,
    plusBlanc,
    poubelle,
    crayon,
    poubelleBlanc,
    crayonBlanc,
    loupe,
    loupeBlanc,
  },
};
</script>