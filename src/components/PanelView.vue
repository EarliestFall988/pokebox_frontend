<template>
  <div class="bg-base-100/50 p-4 m-1 rounded-2xl backdrop-blur-md hidden md:flex h-full">
    <div>
      <h3 class="text-white text-2xl font-bold -mb-2">{{ title }}</h3>
      <p class="mb-3 text-accent">{{ description }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['title', 'description'])
</script>
