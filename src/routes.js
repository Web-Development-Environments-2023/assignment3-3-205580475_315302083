import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/users/MyFavorites",
    name: "MyFavorites",
    component: () => import("./pages/MyFavoritesPage"),
  },
  {
    path: "/users/MyRecipes",
    name: "MyRecipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/users/Recipe/MyRecipe",
    name: "FullMyRecipe",
    component: () => import("./pages/MyRecipeViewPage"),
  },
  {
    path: "/users/MyFamilyRecipe",
    name: "MyFamilyRecipes",
    component: () => import("./pages/MyFamilyPage"),
  },
  {
    path: "/users/Recipe/MyFamilyRecipe",
    name: "FullMyFamilyRecipe",
    component: () => import("./pages/MyFamilyRecipeViewPage"),
  },
];

export default routes;
