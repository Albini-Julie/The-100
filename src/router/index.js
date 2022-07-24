import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import LesPersonnagesView from '../views/LesPersonnagesView.vue'
import LesSaisonsView from '../views/LesSaisonsView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import MonAvisView from '../views/MonAvisView.vue'
import SaisonView from '../views/SaisonView.vue'
import Page404View from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path:'/LesPersonnages', name: 'LesPersonnages', component: LesPersonnagesView},
    { path:'/LesSaisons', name: 'LesSaisons', component: LesSaisonsView},
    { path:'/MentionsLegales', name: 'MentionsLegales', component: MentionsLegalesView},
    { path:'/MonAvis', name: 'MonAvis', component: MonAvisView},
    { path:'/Saison', name: 'Saison', component: SaisonView},
    { path:'/404', name: '404', component: Page404View},
    // ici les autre routes
  ]
})

export default router
