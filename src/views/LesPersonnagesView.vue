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
      <search class="my-10" />
      <plus class="dark:hidden" />
      <plusBlanc class="hidden dark:block" />
    </div>

    <div class="grid-auto-flow mx-5 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
      <div v-for="perso in listePerso" :key="perso.id">
        <div class="border-2 border-gray-900 dark:border-white">
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
            <poubelle class="dark:hidden" />
            <poubelleBlanc class="hidden dark:block" />
            <crayon class="dark:hidden" />
            <crayonBlanc class="hidden dark:block" />
          </div>
        </div>
      </div>

      <!--      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages2.jpg"
          prenom="Clarke"
          nom="Griffin"
          surnom="Waheda"
          qualite="meneuse"
          defaut="têtue"
          saisons="1, 2, 3, 4, 5, 6, 7"
          par="Eliza Taylor"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages3.jpg"
          prenom="Bellamy"
          nom="Blake"
          surnom="Bell"
          qualite="altruiste"
          defaut="influençable"
          saisons="1, 2, 3, 4, 5, 6, 7"
          par="Bob Morley"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages4.jpg"
          prenom="Octavia"
          nom="Blake"
          surnom="O, Blodreina"
          qualite="courageuse"
          defaut="naïve"
          saisons="1, 2, 3, 4, 5, 6, 7"
          par="Marie Avgeropoulos"
        />
      </div>
      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages5.jpg"
          prenom="Lincoln"
          nom="-"
          surnom="Le natif"
          qualite="fidèle"
          defaut="méfiant"
          saisons="1, 2, 3"
          par="Ricky Whittle"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages6.jpg"
          prenom="Raven"
          nom="Reyes"
          surnom="Reyes"
          qualite="intelligente"
          defaut="solitaire"
          saisons="1, 2, 3, 4, 5, 6, 7"
          par="Lindsey Morgan"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages7.jpg"
          prenom="Finn"
          nom="Collins"
          surnom="-"
          qualite="sociable"
          defaut="infidèle"
          saisons="1, 2, 6"
          par="Thomas McDonell"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages8.jpg"
          prenom="Jasper"
          nom="Jordan"
          surnom="-"
          qualite="drôle"
          defaut="doute de lui"
          saisons="1, 2, 3, 4"
          par="Devon Bostick"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages9.jpg"
          prenom="Monty"
          nom="Green"
          surnom="-"
          qualite="intelligent"
          defaut="doute de lui"
          saisons="1, 2, 3, 4, 5"
          par="Christopher Larkin"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages10.jpg"
          prenom="John"
          nom="Murphy"
          surnom="Murphy"
          qualite="réaliste"
          defaut="égoïste"
          saisons="1, 2, 3, 4, 5, 6, 7"
          par="Richard Harmon"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages11.jpg"
          prenom="Abigail"
          nom="Griffin"
          surnom="Doc, Abby"
          qualite="altruiste"
          defaut="influençable"
          saisons="1, 2, 3, 4, 5, 6"
          par="Paige Turco"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages12.jpg"
          prenom="Marcus"
          nom="Kane"
          surnom="Kane"
          qualite="altruiste"
          defaut="têtu"
          saisons="1, 2, 3, 4, 5, 6"
          par="Henry Ian Cusick"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages13.jpg"
          prenom="Thelonious"
          nom="Jaha"
          surnom="Jaha"
          qualite="diplômate"
          defaut="influençable"
          saisons="1, 2, 3, 4, 5"
          par="Isaiah Washington"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages14.jpg"
          prenom="Lexa"
          nom="-"
          surnom="Heda"
          qualite="charismatique"
          defaut="méfiante"
          saisons="2, 3"
          par=" Alycia Debnam-Carey"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages15.jpg"
          prenom="Maya"
          nom="Vie"
          surnom="-"
          qualite="courageuse"
          defaut="timide"
          saisons="2"
          par="Eve Harlow"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages16.jpg"
          prenom="Dante"
          nom="Wallace"
          surnom="-"
          qualite="diplômate"
          defaut="faible"
          saisons="2"
          par="Raymond J. Barry"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages17.jpg"
          prenom="Cage"
          nom="Wallace"
          surnom="-"
          qualite="ambitieux"
          defaut="égocentrique"
          saisons="2"
          par="Johnny Whitworth"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages18.jpg"
          prenom="Indra"
          nom="-"
          surnom="-"
          qualite="forte au combat"
          defaut="abrupte"
          saisons="1, 2, 3, 4, 5, 6, 7"
          par="Adina Porter"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages19.jpg"
          prenom="Emori"
          nom="-"
          surnom="Mori"
          qualite="astucieuse"
          defaut="manipulatrice"
          saisons="2, 3, 4, 5, 6, 7"
          par="Luisa Oliveira"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages20.jpg"
          prenom="Echo"
          nom="-"
          surnom="Ash, espionne"
          qualite="loyale"
          defaut="indépendante"
          saisons="2, 3, 4, 5, 6, 7"
          par="Tasya Teles"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages21.jpg"
          prenom="Roan"
          nom="-"
          surnom="-"
          qualite="ouvert d'esprit"
          defaut="impulsif"
          saisons="3, 4"
          par="Zach McGowan"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages22.jpg"
          prenom="Luna"
          nom="-"
          surnom="-"
          qualite="calme"
          defaut="méfiante"
          saisons="3, 4"
          par="Nadia Hilker"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages23.jpg"
          prenom="Becca"
          nom="Franco"
          surnom="Pramheda"
          qualite="déterminée"
          defaut="imprudente"
          saisons="3, 4, 5"
          par="Erica Cerra"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages24.jpg"
          prenom="A.L.I.E"
          nom="-"
          surnom="A.L.I.E 1.0"
          qualite="analytique"
          defaut="obstinée"
          saisons="2, 3, 4, 5, 6"
          par="Erica Cerra"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages25.jpg"
          prenom="Charles"
          nom="Pike"
          surnom="Pike"
          qualite="Ambitieux"
          defaut="autoritaire"
          saisons="3, 6"
          par="Michael Beach"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages26.jpg"
          prenom="Harper"
          nom="McIntyre"
          surnom="-"
          qualite="volontaire"
          defaut="anxieuse"
          saisons="1, 2, 3, 4, 5"
          par="Chelsey Reist"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages27.jpg"
          prenom="Titus"
          nom="-"
          surnom="Fleimkeepa"
          qualite="loyal"
          defaut="instable"
          saisons="3"
          par="Neil Sandilands"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages28.jpg"
          prenom="Ontari"
          nom="-"
          surnom="-"
          qualite="curieuse"
          defaut="immature"
          saisons="3"
          par="Rhiannon Fish"
        />
      </div>
      <div class="">
        <cardPerso
          image="/public/lespersonnages/lespersonnages29.jpg"
          prenom="Gaia"
          nom="-"
          surnom="Seda"
          qualite="rigoureuse"
          defaut="méfiante"
          saisons="4, 5, 6, 7"
          par="Tati Gabrielle"
        />
      </div>

      <div>
        <cardPerso
          image="/public/lespersonnages/lespersonnages30.jpg"
          prenom="Ilian"
          nom="-"
          surnom="-"
          qualite="compréhensif"
          defaut="influençable"
          saisons="4"
          par="Chai Romruen"
        />
      </div> -->
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

export default {
  data() {
    return {
      listePerso: [],
    };
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
  },
};
</script>