<template>
    <div class="bg-base-200 p-4 m-1 rounded-2xl bg-green-500/5">

        <h3 class="text-white text-2xl font-bold -mb-2">{{ title }}</h3>
        <p class="mb-3 text-accent">{{ description }}</p>
        <slot />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['title', 'description'])

</script>
