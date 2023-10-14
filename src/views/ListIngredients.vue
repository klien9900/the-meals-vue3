<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <div class="pb-5 pt-1">
            <input
                type="text"
                v-model="keyword"
                class="rounded border-2 border-gray-200 w-[400px]"
                placeholder="Search for Ingredients"
            />
        </div>
        <router-link
            :to="{
                name: 'byIngredient',
                params: { ingredient: ingre.strIngredient },
            }"
            v-for="ingre of filterIngredient"
            :key="ingre.idIngredient"
            class="block bg-white rounded-xl p-3 mb-3 shadow"
        >
            <h3 class="text-2xl font-bold mb-2">{{ ingre.strIngredient }}</h3>
            <p>{{ ingre.strDescription }}</p>
        </router-link>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axios from "axios";

const keyword = ref("");
const ingredients = ref([]);
const filterIngredient = computed(() => {
    if (keyword.value == "") {
        return ingredients.value;
    } else {
        return ingredients.value.filter((i) =>
            i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
        );
    }
});

onMounted(async () => {
    let res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    ingredients.value = res.data.meals;
});
</script>
