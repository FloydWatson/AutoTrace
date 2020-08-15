import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home.vue"),
    },
    {
      path: "/tableView",
      name:"tableView",
      component: () => import("./views/tableView.vue"),
    },
  ],
});

export default router;
