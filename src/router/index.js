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
    path: "/all",
    name: "all",
    component: () => import(/* webpackChunkName: "all" */ "../views/Index.vue")
  },
  {
    path: "/animals",
    name: "animals",
    component: () =>
      import(/* webpackChunkName: "animals" */ "../views/Index.vue")
  },
  {
    path: "/films",
    name: "films",
    component: () =>
      import(/* webpackChunkName: "films" */ "../views/Index.vue")
  },
  {
    path: "/food-drink",
    name: "food&drink",
    component: () =>
      import(/* webpackChunkName: "food-drink" */ "../views/Index.vue")
  },
  {
    path: "/nature",
    name: "nature",
    component: () =>
      import(/* webpackChunkName: "nature" */ "../views/Index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
