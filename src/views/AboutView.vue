<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="flex flex-around flex-wrap justify-center sm:justify-around items-center">
      <div class="text-center lg:text-left mx-5">
        <h1 class="text-5xl font-bold">/About</h1>
        <p class="py-6">The wonderful authors of Pokébox.zone</p>
      </div>
      <div class="mx-5 text-center m-auto">
        <p v-for="name in names" :key="name" class="my-8 font-bold">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const names = ref(['Jacob Legg', 'Taylor Howell', 'Emma Beatty', 'Micah Roening'])
</script>
