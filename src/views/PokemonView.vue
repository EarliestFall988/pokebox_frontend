<template>
    <main class="flex">
        <div class="w-full"></div>
        <div class="w-5/12 bg-neutral-800/30 border-l-[1px] border-neutral-700 p-4">
            <div>
                <h3 class="text-white text-lg font-bold">Selected Pokemon</h3>
                <p class="italic">Select your pokemon to see what you've got</p>
            </div>
            <div class="my-5 rounded p-4">
                
            <PokemonDetailsBox />                

            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue';
import PokemonDetailsBox from '../components/PokemonDetailsBox.vue';

// const P = new Pokedex();

const loading = ref(true)

const selectedPokemon = ref(
    {
        "name": "ditto",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    }
)

const getPokemon = async (name) => {
    // const pokemon = await P.getPokemonByName(name)
    // console.log(pokemon);
    // return pokemon
}



</script>

<style></style>
