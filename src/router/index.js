import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StoreAccess from '../views/StoreAccess';
import StoreAccess1 from '../views/StoreAccess1';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/StoreAccess',
    name: 'StoreAccess',
    component: StoreAccess,
  },
  {
    path: '/StoreAccess1',
    name: 'StoreAccess1',
    component: StoreAccess1,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;