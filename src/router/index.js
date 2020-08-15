import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Index
  },
  {
    path: "/photo/:id",
    name: "photo",
    props: true,
    component: () => import(/* webpackChunkName: "photo" */ "../views/Photo")
  },
  {
    path: "/author/:id",
    name: "author",
    props: true,
    component: () => import(/* webpackChunkName: "author" */ "../views/Author")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
