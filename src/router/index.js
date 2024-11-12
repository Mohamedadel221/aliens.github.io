import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactPage from "@/views/ContactPage.vue";
import ErrorPage from "@/views/ErrorPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "HomePage",
    },
  },

  {
    path: "/contactus",
    name: "contactUs",
    component: ContactPage,
    meta: {
      title: "ContactUs",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "error-page",
    component: ErrorPage,
    meta: {
      title: "PageNotFound",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
