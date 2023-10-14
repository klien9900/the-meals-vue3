<template>
    <a
        :href="props.href"
        target="_blank"
        class="px-3 py-2 rounded border-2 bg-red-500 border-red-600 text-white hover:bg-red-600 transition-colors"
    >
        <slot></slot
    ></a>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    href: String,
});
</script>
<style></style>
