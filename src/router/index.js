import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/backend/LoginView.vue";
import authMiddleware from "@/middleware/authMiddleware.js";
import loginMiddleware from "@/middleware/loginMiddleware.js";
import Dashboard from "../views/backend/Dashboard.vue";
import UserIndex from "../views/backend/User/UserDelete.vue";
// import UserStore from '../views/backend/User/UserStore.vue';
// import UserDelete from '../views/backend/User/UserDelete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        middleware: [loginMiddleware],
      }
    },
    {
      path: "/dashboard",
      name: "dashboard.index",
      component: Dashboard,
      meta: {
        middleware: [authMiddleware],
      },
    },
    {
      path: "/user/index",
      name: "user.index",
      component: UserIndex,
    },
    // {
    //   path:'/user/store',
    //   name:'user.store',
    //   component: UserStore
    // },
    // {
    //   path:'/user/delete',
    //   name:'user.delete',
    //   component: UserDelete
    // }
  ],
});


router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    middleware.forEach((m) => m(to, from, next));
  } else {
    next();
  }
});

export default router;
