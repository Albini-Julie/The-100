import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import LesPersonnagesView from '../views/LesPersonnagesView.vue'
import LesSaisonsView from '../views/LesSaisonsView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import MonAvisView from '../views/MonAvisView.vue'
import Saison1View from '../views/Saison1View.vue'
import Saison2View from '../views/Saison2View.vue'
import Saison3View from '../views/Saison3View.vue'
import Saison4View from '../views/Saison4View.vue'
import Page404 from '../views/404.vue'
import CreateView from "../views/CreateView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path:'/LesPersonnages', name: 'LesPersonnages', component: LesPersonnagesView},
    { path:'/LesSaisons', name: 'LesSaisons', component: LesSaisonsView},
    { path:'/MentionsLegales', name: 'MentionsLegales', component: MentionsLegalesView},
    { path:'/MonAvis', name: 'MonAvis', component: MonAvisView},
    { path:'/Saison1', name: 'Saison1', component: Saison1View},
    { path:'/Saison2', name: 'Saison2', component: Saison2View},
    { path:'/Saison3', name: 'Saison3', component: Saison3View},
    { path:'/Saison4', name: 'Saison4', component: Saison4View},
    { path:'/404', name: 'Page404', component: Page404},
    { path:'/Create', name: 'Create', component: CreateView},
    // ici les autre routes
  ]
})

export default router
