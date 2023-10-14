<template>
    <div
        class="bg-white shadow rounded-xl flex flex-col hover:scale-105 transition duration-500"
    >
        <router-link
            :to="{ name: 'mealDetails', params: { id: props.meal.idMeal } }"
        >
            <img
                :src="props.meal.strMealThumb"
                :alt="props.meal.strMeal"
                class="rounded-t-2xl h-48 object-cover w-full"
            />
        </router-link>

        <div class="p-3 grow flex flex-col">
            <h3 class="font-semibold">{{ props.meal.strMeal }}</h3>
            <p class="mb-4 grow">
                Bring a large pot of water to a boil. Add kosher salt to the
                boiling water, then add the pasta. Cook according to the package
                instructions, about 9 minutes.\r\nIn a large skillet over
                medium-high heat, add the olive oil and heat until the oil
                starts to shimmer.
            </p>
            <div class="flex justify-between items-center">
                <YoutubeBtn :href="props.meal.strYoutube">Youtube</YoutubeBtn>
                <!-- <router-link
                        to="/"
                        class="px-3 py-2 rounded border-2 bg-purple-500 border-purple-600 text-white hover:bg-purple-600 transition-colors"
                        >View</router-link
                    > -->
            </div>
        </div>
    </div>
</template>

<script setup>
import YoutubeBtn from "@/components/YoutubeBtn.vue";
import { defineProps } from "vue";
const props = defineProps({
    meal: Object,
});
</script>

<style></style>
