import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";



const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "MealsByLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "MealsByName",
        component: MealsByName,
      },
      {
        path: "/by-ingredients/:ingredients?",
        name: "MealsByIngredients",
        component: MealsByIngredients,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
    children: [
      
    ],
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
