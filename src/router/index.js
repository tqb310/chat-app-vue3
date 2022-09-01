import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeVue/index.vue";
import authProvider from "@/contexts/authProvider";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sign-in",
    name: "signin",
    component: () => import("../views/SignInView/index.vue"),
    beforeEnter: () => {
      if (!authProvider.auth.isLoggedIn) return true;
      return { name: "home" };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(to => {
  if (to.meta.requiresAuth) {
    if (authProvider.auth.isLoggedIn) return true;
    return { name: "signin" };
  }
  return true;
});
export default router;
