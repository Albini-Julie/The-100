import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyD1vdTNZiamlrWK-T3cyXJSEbZKLgUjAzI",
    authDomain: "the-100-550c7.firebaseapp.com",
    projectId: "the-100-550c7",
    storageBucket: "the-100-550c7.appspot.com",
    messagingSenderId: "893754597187",
    appId: "1:893754597187:web:f96ad289b413f9ead799f6"
  };

  const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
