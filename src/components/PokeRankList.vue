<template>
  <div class="flex items-center flex-wrap md:grid grid-cols-3 gap-4 my-2">
    <div class="col-span-2">
      <input
        type="text"
        class="p-2 rounded-lg md:w-full text-white input input-bordered max-w-xs"
        placeholder="Search Pokemon..."
        v-model="searchPokemonName"
      />
      <button @click="$emit('fetchPokemonRank')" class="btn btn-primary text-white shadow mx-2">
        <!-- <RouterLink to="/register">Search</RouterLink> -->
        Search
      </button>
    </div>
    <div class="flex justify-end px-2 my-auto">
      <!-- <RouterLink to="/register">Create Account</RouterLink> -->
    </div>
  </div>
  <div class="w-full">
    <div v-if="!loadingPokemonRank">
      <div
        v-for="p in PokeAccountRank"
        :key="p"
        class="grid grid-cols-3 w-full p-2 bg-gray-800 text-white m-1 rounded"
      >
        <p>{{ p.Rank }}</p>
        <p>{{ p.Username }}</p>
        <p class="text-right">{{ p.PokemonCount }}</p>
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
