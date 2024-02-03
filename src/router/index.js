import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/backend/LoginView.vue";
import Dashboard from '../views/backend/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: "dashboard.index",
      component: Dashboard,
    },
  ],
});

export default router;
