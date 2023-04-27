<template>
  <div class="flex items-center flex-wrap md:grid grid-cols-3 gap-4 my-2">
    <div class="col-span-2">
      <slot />
    </div>
    <div class="flex justify-end px-2 my-auto">
      <!-- <RouterLink to="/register">Create Account</RouterLink> -->
    </div>
  </div>
  <div class="w-full">
    <div v-if="!loadingPokemonRank">
      <div v-if="PokeAccountRank.length === 0" class="flex justify-center items-center">
        <p class="mt-2 text-lg text-info italic bg-gray-800/50 w-full text-center py-5 rounded-lg">
          Search for a Pokemon
        </p>
      </div>
      <div v-else>
        <div class="grid grid-cols-3 w-full p-2 text-white m-1 rounded">
          <p>Rank</p>
          <p class="text-center">Username</p>
          <p class="text-right">Pokemon Count</p>
        </div>
        <div
          v-for="p in PokeAccountRank"
          :key="p"
          class="grid grid-cols-3 w-full p-2 bg-gray-800 text-white m-1 rounded"
        >
          <p class="text-lg font-bold truncate">#{{ p.Rank }}</p>
          <p class="text-center truncate">{{ p.Username }}</p>
          <p class="text-right truncate">{{ p.PokemonCount }}</p>
        </div>
      </div>
    </div>

    <div v-else>
      <LoadingSpinnerView />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'

defineProps(['PokeAccountRank', 'loadingPokemonRank'])

defineEmits(['fetchPokemonRank'])
</script>
