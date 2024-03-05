
import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import { createRouter, createWebHistory } from 'vue-router'; // Import specific functions

import About from './components/About.vue';
import Home from './components/Home.vue';
import RouteClick from './components/RouteClick.vue';
import User from './components/User.vue';
import List from './components/List.vue';
import signup from './components/Signup.vue';
import card from './components/Cards.vue';
import scroll from './components/scroll.vue';
import Landing from './components/landingpage.vue';
import Rotate from './components/rotate.vue';
import First from './components/firstpage.vue';
import Videos from './components/video.vue';

import Second from './components/second.vue';

import Dashboard1 from './components/dashboardshow.vue';

import Gsap from './components/gsap.vue';

import Horizontal from './components/horizontal.vue';
import Price from './components/pricing.vue';

import circle from './components/circle.vue';

import play from './components/play.vue';
import header from './components/header.vue';

import newpage from './components/newpage.vue';

import carousal from './components/carousal.vue';
import updated from './components/updated.vue';

import better from './components/better.vue';
import footer from './components/footer.vue';















const app = createApp(App);

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
  ,
  {
    path: '/route',
    component: RouteClick
  },

  { path: '/user/:id', component: User },
  
  { path: '/list', component: List },

  { path: '/signup', component: signup },

  { path: '/card', component: card },

  { path: '/scroll', component: scroll },

  { path: '/landing', component: Landing },

  { path: '/rotate', component: Rotate },

  { path: '/', component: First },
  // { path: '/first', component: First },


  { path: '/video', component: Videos },

  { path: '/second', component: Second },

  { path: '/gsap', component: Gsap },

  { path: '/horizontal', component: Horizontal },

  { path: '/dashboard', component: Dashboard1 },
  // { path: '/', component: Dashboard1 },


  { path: '/pricing', component: Price },

  { path: '/circle', component: circle },

  { path: '/play', component: play },

  { path: '/header', component: header },

  { path: '/newpage', component: newpage },

  { path: '/carousal', component: carousal },

  { path: '/updated', component: updated },

  { path: '/better', component: better },

  { path: '/footer', component: footer },

















  



];

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);

app.mount('#app');
