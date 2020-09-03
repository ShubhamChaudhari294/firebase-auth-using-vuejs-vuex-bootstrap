import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Register from "../components/Register.vue"
import Login from "../components/Login.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: HelloWorld,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/home",
    name: "Home",
    component: HelloWorld,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
   
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
