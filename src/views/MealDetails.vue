<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" alt="meal.strMeal" class="max-w-full" />
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong
                >{{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong>{{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong>{{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ meal.strInsstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(el, i) of new Array(20)" :key="i">
                        <li
                            v-if="
                                meal[`strIngredient${i + 1}`] &&
                                meal[`strIngredient${i + 1}`].trim() != ''
                            "
                        >
                            {{ i + 1 }}.{{ meal[`strIngredient${i + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(el, i) of new Array(20)" :key="i">
                        <li
                            v-if="
                                meal[`strMeasure${i + 1}`] &&
                                meal[`strMeasure${i + 1}`].trim() != ''
                            "
                        >
                            {{ i + 1 }}.{{ meal[`strMeasure${i + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YoutubeBtn :href="meal.strYoutube"> YouTube </YoutubeBtn>
                <a
                    :href="meal.Source"
                    target="_blank"
                    class="ml-3 px-3 py-2 cursor-pointer rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                >
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import YoutubeBtn from "@/components/YoutubeBtn.vue";
const route = useRoute();
const meal = ref({});
onMounted(() => {
    axios
        .get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=` +
                route.params.id
        )
        .then((res) => {
            meal.value = res.data.meals[0] || {};
        });
});
</script>

<style></style>
