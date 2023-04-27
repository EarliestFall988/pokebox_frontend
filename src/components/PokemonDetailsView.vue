<script setup>
import { defineProps } from 'vue'
import ElementIcons from './ElementIcons.vue'
import GenderIcons from './GenderIcons.vue'

defineProps(['selectedPokemon'])
</script>

<template>
  <div
    class="w-64 flex justify-between items-start mt-5 rounded p-2 shadow-lg hover:shadow-2xl hover:scale-110 duration-150"
  >
    <div class="rounded flex flex-col justify-between items-start">
      <div class="w-full">
        <div class="flex justify-between w-full items-start mb-4">
          <div class="flex items-center mb-1">
            <font-awesome-icon icon="user" class="w-3 h-3 mr-1 text-info" />
            <p>{{ selectedPokemon.Username }}</p>
          </div>
        </div>

        <div class="flex items-top">
          <div class="-mt-6 -ml-2">
            <img
              :src="selectedPokemon.ImageLink"
              class="h-28 w-28 hover:scale-150 hover:rotate-12 duration-150"
              :alt="selectedPokemon.PokemonName"
            />
          </div>

          <div class="mr-2">
            <div v-if="selectedPokemon.NickName">
              <p class="text-lg font-bold -m-1">{{ selectedPokemon.NickName }}</p>
            </div>
            <p class="text-sm">({{ selectedPokemon.PokemonName }})</p>
            <div class="my-2" />
            <GenderIcons :gender="selectedPokemon.Gender" />
          </div>
        </div>
        <p class="text-lg font-bold italic">lvl.{{ selectedPokemon.Level }}</p>
      </div>
      <div class="flex justify-between items-center w-full">
        <!-- <div>
          <h3 class="-mb-4 mt-2 text-primary text-lg w-full text-center">Lore about {{ selectedPokemon.name }}</h3>
          <div v-if="seeAllDescription">
            <p class="italic w-60 h-5 text-sm my-3 text-info text-ellipsis overflow-hidden truncate">{{
              selectedPokemon.description }}</p>
            <button @click="toggleDescription()" class="btn btn-outline">See More...</button>
          </div>
          <div v-else>
            <p class="italic w-60 text-sm my-3 text-info ">{{
              selectedPokemon.description }}</p>
            <button @click="toggleDescription" class="btn btn-outline">Show Less</button>
          </div>
        </div> -->
      </div>
    </div>
    <div>
      <ElementIcons :element="selectedPokemon.PokemonTypeNameOne" />
      <ElementIcons :element="selectedPokemon.PokemonTypeNameTwo" />

      <!-- <ElementIcons element="water" />
            <ElementIcons element="grass" />
            <ElementIcons element="electric" />
            <ElementIcons element="ice" />
            <ElementIcons element="poison" />
            <ElementIcons element="ground" />
            <ElementIcons element="flying" />
            <ElementIcons element="psychic" />
            <ElementIcons element="bug" />
            <ElementIcons element="rock" />
            <ElementIcons element="ghost" />
            <ElementIcons element="dragon" />
            <ElementIcons element="dark" />
            <ElementIcons element="steel" />
            <ElementIcons element="fairy" /> -->
    </div>
  </div>
</template>
