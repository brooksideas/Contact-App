import Vue from 'vue'
import VueRouter from 'vue-router'

// Route imports  
import LoginPage from '@/pages/LoginPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import FinishPage from '@/pages/FinishPage.vue';

Vue.use(VueRouter)

const routes = [  
      { path: '/', name: 'LoginPage', component: LoginPage }, 
      { path: '/contact-page', name: 'ContactPage', component: ContactPage }, 
      { path: '/finish-page', name: 'FinishPage', component: FinishPage }, 

    ];

  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

export default router;


