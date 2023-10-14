<template>
    <NotFoundMealVue v-if="!meals || meals.length == 0" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" v-else>
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import store from "@/store";
import { useRoute } from "vue-router";
import MealItem from "@/components/MealItem.vue";
import NotFoundMealVue from "./NotFoundMeal.vue";

const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);
onMounted(() => {
    store.dispatch("searchByIngredient", route.params.ingredient);
});
</script>
