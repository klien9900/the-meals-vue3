<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <router-link
            :to="{ name: 'home' }"
            class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
        >
            Home
        </router-link>
        <div class="font-bold flex items-center gap-1">
            <router-link
                class="font-bold inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                :to="{ name: 'byName' }"
            >
                Search Meals
            </router-link>
            <router-link
                class="font-bold inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                :to="{ name: 'byLetter' }"
            >
                Meals By Letter
            </router-link>
            <router-link
                class="font-bold inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                :to="{ name: 'listIngredient' }"
            >
                Meals By Ingredients
            </router-link>
        </div>
    </header>
</template>
<script setup></script>
