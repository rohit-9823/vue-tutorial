import { createRouter, createWebHistory } from "vue-router";
import Abouts from "../components/about/About";

const routes = [
  {
    path: "/about",
    name: "about",
    component: Abouts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
