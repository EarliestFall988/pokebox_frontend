<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">/Add Your Pokemon</h1>
                <p class="py-6">Add your newest Pokemon!</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <!-- <Transition name="slide" mode="out-in"> -->
                <div>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Pokemon Name</span>
                            </label>
                            <input v-model="pokemonName" type="text" placeholder="Pokemon Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">PokeDex Number</span>
                            </label>
                            <input v-model="pokeDexNumber" type="text" placeholder="PokeDex Number" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Pokemon Image Link</span>
                            </label>
                            <input v-model="imageLink" type="text" placeholder="Pokemon Image Link"
                                   class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Legendary</span>
                            </label>
                            <input v-model="legendary" type="checkbox" class="toggle" unchecked />
                        </div>
                    </div>

                        <p class="text-error text-center italic">{{ err }}</p>
                        <div class="form-control mt-6">
                            <button @click.prevent="attemptAddItem"
                                    class="btn btn-primary bg-gradient-to-bl text-white font-bold from-blue-600 via-purple-500 to-red-400 border-0">
                                Find 'em all!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <Modal @clear="clear" :header="header" :body="body" />

    <Teleport to="body">
        <FullScreenLoading v-if="loading" />
    </Teleport>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { createRouter } from 'vue-router'
import Modal from '../components/ModalComponent.vue'
import router from '../router'
import SpinnerComponent from '../components/SpinnerComponent.vue'

import FullScreenLoading from '../components/FullScreenLoading.vue'

import { useUserStore } from '../stores/User.js'

const user = useUserStore().user
const searchUser = useUserStore().searchUser

const pokemonName = ref('')
const pokeDexNumber = ref('')
const itemTypeName = ref('')
const imageLink = ref('')
const legendary = ref('')

const err = ref('')

const header = ref('')
const body = ref('')

const loading = ref(false)

const clear = () => {
    header.value = ''
    body.value = ''
}

let attemptAddItem = async () => {
    console.log('attempting item add')
    loading.value = true

    
        if (pokemonName.value == '') {
            err.value = "Pokemon Name is empty"
            return
        }
        if (pokeDexNumber.value == '') {
            err.value = "PokeDex Number is empty"
            return
        }
        if (imageLink.value == '') {
            err.value = "Image Link is empty"
            return
        }
    try {
        console.log('AddPokemon')
        err.value = ""
            await fetch('https://localhost:7071/api/v1/Pokemon/AddPokemon?pokemonName=' +
                pokemonName.value +
                '&pokedexNumber=' +
                pokeDexNumber.value +
                '&imageLink=' +
                imageLink.value +
                '&isLegendary=' +
                legendary.value,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        SessionID: user.session
                    },
                })
                .then((response) => {
                    response.json().then((data) => {
                        console.log("full1 " + data)
                        console.log("Test1 " + data.err)
                        if (data.err) {

                            err.value = data.err

                        }
                        else {
                            header.value = 'Success!'
                            body.value = 'You have successfully added your Pokemon Now Go Add its Types!'
                            router.push('/AddPokemonsType')
                        }
                    })
                })
            .catch((err) => console.log(err))
    } catch (err) {
        console.log(err)

    } finally {
        loading.value = false
    }
}
</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
    transition: all 0.125s ease-out;
}

.slide-enter-to {
    /* position: absolute; */
    right: 0;
}

.slide-enter-from {
    /* position: absolute; */
    right: -100%;
}

.slide-leave-to {
    /* position: absolute; */
    left: -100%;
}

.slide-leave-from {
    /* position: absolute; */
    left: 0;
}
</style>
