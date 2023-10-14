<template>
    <div class="p-8 pb-0">
        <input
            type="text"
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals"
            @change="searchMeals"
        />
    </div>
    <ListMeals :meals="meals" />
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "@/store/index.js";
import { useRoute } from "vue-router";
import ListMeals from "../components/ListMeals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name;
    if (!keyword.value) {
        keyword.value = "";
    }
    searchMeals();
});
</script>
