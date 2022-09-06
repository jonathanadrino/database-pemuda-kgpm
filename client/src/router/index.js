import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import AddPage from "../views/AddPage.vue";
import HomePage from "../views/HomePage.vue";
import SidangPage from "../views/SidangPage.vue";
import AddSidang from "../views/AddSidang.vue";
import DetailPage from "../views/DetailPage.vue";
import TechnologiesPage from "../views/TechnologiesPage.vue";
import EditSidangPage from "../views/EditSidangPage.vue";
import EditPage from "../views/EditPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/technologies",
      name: "technologies",
      component: TechnologiesPage,
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/add/:id",
      name: "addData",
      component: AddPage,
    },
    {
      path: "/sidang/:id",
      name: "sidang",
      component: SidangPage,
    },
    {
      path: "/sidang/add",
      name: "addSidang",
      component: AddSidang,
    },
    {
      path: "/detail/:id",
      name: "detailData",
      component: DetailPage,
    },
    {
      path: "/sidang/edit/:id",
      name: "editSidang",
      component: EditSidangPage,
    },
    {
      path: "/edit/:id",
      name: "editData",
      component: EditPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");

  if (
    (to.name === "home" ||
      to.name === "addData" ||
      to.name === "sidang" ||
      to.name === "editSidang" ||
      to.name === "addSidang " ||
      to.name === "detail" ||
      to.name === "technologies" ||
      to.name === "editData") &&
    !token
  ) {
    next("/login");
  } else if (to.name === "login" && token) {
    next("/");
  } else {
    next();
  }
});

export default router;
