import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/developers',
    name: 'developers',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/developers.vue'),
  },
  {
    path: '/themes',
    name: 'themes',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/themes.vue'),
  },

  {
    path: '/tutorial',
    name: 'tutorial',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/tutorial.vue'),
  },

  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/leaderboard.vue'),
  },
  {
    path: '/create/:template/:id/',
    name: 'create',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/create.vue'),
  },

  {
    path: '/1/:username',
    name: 'theme1',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/theme1.vue'),
  },
  {
    path: '/2/:username',
    name: 'theme2',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/theme2.vue'),
  },
  {
    path: '/3/:username',
    name: 'theme3',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/theme3.vue'),
  },
  {
    path: '/4/:username',
    name: 'theme4',
    component: () =>
      import(/* webpackChunkName: "faq" */ '../views/theme4.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
