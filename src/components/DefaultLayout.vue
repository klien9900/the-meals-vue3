<template>
    <div class="bg-gray-100 h-full flex flex-col">
        <NavBar />
        <main class="grow-1">
            <router-view />
        </main>
    </div>
</template>
<script setup>
import NavBar from "./NavBar.vue";
</script>
