<template>
  <div v-if="show"
    class="fixed bottom-0 inset-0 z-20 w-screen h-screen flex justify-center items-center backdrop-blur-md backdrop-brightness-50"
  >
    <div class="bg-gray-800 md:rounded w-full md:w-3/12 p-2">
      <h2 class="text-2xl font-bold text-info">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="flex justify-end mt-4">
        <button @click="$emit('yes')" class="btn btn-outline">Yep</button>
        <button @click="$emit('no')" class="btn btn-outline mx-2">Nope</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['title', 'description', 'show'])
defineEmits(['yes', 'no'])
</script>
