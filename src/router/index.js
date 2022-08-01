import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeVue/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign-in",
    name: "signin",
    component: () => import("../views/SignInView/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
