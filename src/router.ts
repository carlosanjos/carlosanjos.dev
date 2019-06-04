import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Editor from './components/Editor.vue';
import AddItem from './components/AddItem.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: Editor,
    },
    {
      path: '/add',
      name: 'add',
      component: AddItem,
    },
  ],
});
