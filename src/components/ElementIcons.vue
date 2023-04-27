<template>
  <div class="hover:scale-150 duration-150 z-20">
    <div v-if="element === 'fire'">
      <font-awesome-icon icon="fire" class="w-6 h-6 text-red-400" />
    </div>
    <div v-else-if="element === 'water'">
      <font-awesome-icon icon="droplet" class="w-6 h-6 text-blue-400" />
    </div>
    <div v-else-if="element === 'grass'">
      <font-awesome-icon icon="leaf" class="w-6 h-6 text-green-400" />
    </div>
    <div v-else-if="element === 'electric'">
      <font-awesome-icon icon="bolt" class="w-6 h-6 text-blue-300" />
    </div>
    <div v-else-if="element === 'ice'">
      <font-awesome-icon icon="snowflake" class="w-6 h-6 text-white" />
    </div>
    <div v-else-if="element === 'fighting'">
      <font-awesome-icon icon="hand-fist" class="w-6 h-6 text-white" />
    </div>
    <div v-else-if="element === 'poison'">
      <font-awesome-icon icon="skull-crossbones" class="w-6 h-6 text-orange-500" />
    </div>
    <div v-else-if="element === 'ground'">
      <font-awesome-icon icon="mountain" class="w-6 h-6 text-purple-400" />
    </div>
    <div v-else-if="element === 'flying'">
      <font-awesome-icon icon="feather-alt" class="w-6 h-6 text-white/80" />
    </div>
    <div v-else-if="element === 'psychic'">
      <font-awesome-icon icon="brain" class="w-6 h-6 text-pink-400" />
    </div>
    <div v-else-if="element === 'bug'">
      <font-awesome-icon icon="bug" class="w-6 h-6 text-gray-500" />
    </div>
    <div v-else-if="element === 'rock'">
      <font-awesome-icon icon="hill-rockslide" class="w-6 h-6 text-gray-500" />
    </div>
    <div v-else-if="element === 'ghost'">
      <font-awesome-icon icon="ghost" class="w-6 h-6 text-white" />
    </div>
    <div v-else-if="element === 'dragon'">
      <font-awesome-icon icon="dragon" class="w-6 h-6 text-red-500" />
    </div>
    <div v-else-if="element === 'dark'">
      <font-awesome-icon icon="moon" class="w-6 h-6 text-blue-600" />
    </div>
    <div v-else-if="element === 'steel'">
      <font-awesome-icon icon="shield-alt" class="w-6 h-6 text-purple-200" />
    </div>
    <div v-else-if="element === 'fairy'">
      <font-awesome-icon icon="star" class="w-6 h-6 text-yellow-500" />
    </div>
    <div v-else-if="element === 'normal'">
      <font-awesome-icon icon="circle" class="w-6 h-6 text-white" />
    </div>
    <div v-else-if="element === 'none'">
      <!-- <font-awesome-icon icon="circle" class="w-6 h-6 text-white" /> -->
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  element: {
    type: String,
    default: 'none'
  }
})
</script>
