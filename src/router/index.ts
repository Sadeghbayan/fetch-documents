import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import { store } from "@/store/store";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "repository" */ "../views/Contacts.vue"),
  },
  {
    path: "/documents",
    name: "Documents",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Documents.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
