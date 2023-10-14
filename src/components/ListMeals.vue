<template>
    <NotFoundMeal v-if="!props.meals || props.meals.length == 0" />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8" v-else>
        <MealItem v-for="meal of props.meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import MealItem from "@/components/MealItem.vue";
import NotFoundMeal from "@/views/NotFoundMeal.vue";
import { defineProps } from "vue";
const props = defineProps({
    meals: Object,
});
</script>

<style></style>
