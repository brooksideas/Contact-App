import Vue from 'vue'
import VueRouter from 'vue-router'

// Route imports  
import LoginPage from '@/pages/LoginPage.vue';
import ContactPage from '@/pages/ContactPage.vue';

Vue.use(VueRouter)

const routes = [  
      { path: '/', name: 'LoginPage', component: LoginPage }, 
      { path: '/contact-page', name: 'ContactPage', component: ContactPage }, 
    ];

  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

export default router;


