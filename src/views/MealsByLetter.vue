<template>
    <div class="flex mt-4 gap-3 px-3 justify-center w-fit m-auto rounded-md">
        <router-link
            :to="{ name: 'byLetter', params: { letter } }"
            v-for="letter of letters"
            :key="letter"
            class="font-semibold text-xl p-3 hover:bg-gray-300 rounded-xl shadow"
            @click="searchByLetter(letter)"
        >
            {{ letter }}</router-link
        >
    </div>
    <NotFoundMealVue v-if="!meals || meals.length == 0" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" v-else>
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>
<script setup>
import store from "@/store";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import MealItem from "@/components/MealItem.vue";
import NotFoundMealVue from "./NotFoundMeal.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

function searchByLetter(letter) {
    store.dispatch("searchByLetter", letter);
}

onMounted(() => {
    store.dispatch("searchByLetter", route.params.letter);
});
</script>
