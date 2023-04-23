<script>
import { computed, ref, defineProps } from 'vue'

import { BeakerIcon, UserIcon } from '@heroicons/vue/24/solid'

import GenderIcons from './GenderIcons.vue'
import ElementIcons from './ElementIcons.vue'

export default {
  components: {
    UserIcon,
    GenderIcons,
    ElementIcons
  },

  async setup() {
    const props = defineProps([
      'name',
      'userName',
      'gender',
      'species',
      'description',
      'element1',
      'element2',
      'level'
    ])

    // const species = ref('squirtle')

    // const name = ref(props.name || '')
    // const userName = ref(props.userName || '')
    // const gender = ref('male')
    // const species = ref('squirtle')
    // const description = ref('description')
    // const element1 = ref('fire')
    // const element2 = ref('water')
    // const level = ref(14)

    const selectedPokemon = ref({
      name: 'Britney Spirs',
      userName: 'j.houser133@hotmail.co.uk',
      gender: 'male',
      species: 'charmander',
      description: 'this charmander is a fire type and is level 14',
      element1: 'fire',
      element2: 'poison',
      level: 14
    })

    const img = ref(null)
    const imgResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon/' + selectedPokemon.value.species
    )
    const imgData = await imgResponse.json()
    console.log(imgData)
    img.value = imgData.sprites.other.home.front_default

    return {
      selectedPokemon,
      img
    }
  }
}
</script>

<template>
  <div class="w-64 flex justify-between items-start mt-5">
    <div class="rounded flex flex-col justify-between items-start">
      <div class="w-full">
        <div class="flex justify-between w-full items-start mb-4">
          <div class="flex items-center">
            <UserIcon class="h-4 w-4 text-white" />
            <p>{{ selectedPokemon.userName }}</p>
          </div>
        </div>

        <div class="flex items-top">
          <div class="-mt-6 -ml-2">
            <img :src="img" class="h-28 w-28" :alt="selectedPokemon.species" />
          </div>

          <div class="mr-2">
            <div v-if="selectedPokemon.name">
              <p class="text-lg font-bold">{{ selectedPokemon.name }}</p>
            </div>
            <p class="ml-4 text-sm">({{ selectedPokemon.species }})</p>
            <div class="my-2" />
            <GenderIcons :gender="selectedPokemon.gender" />
          </div>
        </div>
        <p class="italic text-sm my-3">{{ selectedPokemon.description }}</p>
      </div>
      <div class="flex justify-between items-center w-full">
        <p class="text-lg italic">lvl.{{ selectedPokemon.level }}</p>
      </div>
    </div>
    <div>
      <ElementIcons :element="selectedPokemon.element1" />
      <ElementIcons :element="selectedPokemon.element2" />

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
