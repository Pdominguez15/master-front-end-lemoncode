import Router, { RouteConfig } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe/list";
import { EditRecipePageContainer } from "./pages/recipe/edit";

export const baseRoutes = {
  root: "/",
  login: "/login",
  recipe: "/recipe",
  edit: "/recipe/:id",
};

export type BaseRoutes = typeof baseRoutes;

function guardMyroute(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem("user")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/login");
  }
}

const routes: RouteConfig[] = [
  { path: baseRoutes.root, redirect: baseRoutes.login },
  { path: baseRoutes.login, component: LoginPageContainer },
  {
    path: baseRoutes.recipe,
    component: RecipeListPageContainer,
    beforeEnter: guardMyroute,
  },
  {
    path: baseRoutes.edit,
    component: EditRecipePageContainer,
    props: true,
    beforeEnter: guardMyroute,
  },
];

export const router = new Router({
  routes,
});
