import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView';
import MealsByName from '../views/MealsByName';
import MealsByLetter from '../views/MealsByLetter';
import MealsByIngredients from '../views/MealsByIngredients';
import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";
import MealDetails from "../views/MealDetails";
import ListIngredients from "../views/ListIngredients";
const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: HomeView
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsByName
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter
            },
            {
                path: "/ingredients",
                name: "listIngredient",
                component: ListIngredients
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredients
            },
            {
                path: "/meal/:id",
                name: "mealDetails",
                component: MealDetails
            },
        ]
    },
    {
        path: "/guest",
        component: GuestLayout,
    },

]
const router = createRouter(
    { history: createWebHistory(), routes: routes }
);
export default router