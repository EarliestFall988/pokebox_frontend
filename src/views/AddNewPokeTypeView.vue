<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">/Add Your Pokemons Types</h1>
                <p class="py-6">Finish your newest Pokemon!</p>
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
                                <span class="label-text">Pokemon Type</span>
                            </label>
                            <input v-model="pokemonTypeOne" type="text" placeholder="Pokemon Type"
                                   class="input input-bordered" />
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
const pokemonTypeOne = ref('')

const err = ref('')

const header = ref('')
const body = ref('')

const loading = ref(false)

const clear = () => {
    header.value = ''
    body.value = ''
}

let attemptAddItem = async () => {
    console.log('attempting poketype add')
    loading.value = true

    
        if (pokemonName.value == '') {
            err.value = "Pokemon Name is empty"
            return
        }
        if (pokemonTypeOne.value == '') {
            err.value = "Pokemon Type is empty"
            return
        }
    try {
        
        err.value = ""
        console.log("Adding Type")

        await fetch('https://localhost:7071/api/v1/Pokemon/AddPokeType?pokemonTypeName=' +
            pokemonTypeOne.value +
            '&pokemonName=' +
            pokemonName.value,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    SessionID: user.session
                },
            })
            .then((response) => {
                response.json().then((data) => {
                    console.log("full2 " + data)
                    console.log("Test2 " + data.err)
                    if (data.err) {

                        err.value = data.err
                        // console.log('error' + data.err)

                        //console.log('fail')

                    }
                    else {
                        header.value = 'Success!'
                        body.value = 'You have successfully added your Pokemon Type!'
                        router.push('/dashboard')
                    }
                })
            })
            .catch((err) => console.log(err))
       
    } catch (err) {
        console.log(err)

    } finally {
        loading.value = false
    }













        
    
    /*if (pokemonTypeTwo == '') {
        try {
            console.log('in the if')
            err.value = ""
            await fetch('https://localhost:7071/api/v1/Pokemon/AddPokeType?pokemonTypeName=' +
                pokemonTypeOne.value +
                '&pokemonName=' +
                pokemonName.value,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        SessionID: user.session
                    },
                })
                .then((response) => {
                    response.json().then((data) => {
                        console.log("full " + data)
                        console.log("Test " + data.err)
                        if (data.err) {

                            err.value = data.err
                            // console.log('error' + data.err)

                            //console.log('fail')

                        }
                    })
                })
                .catch((err) => console.log(err))
            console.log(err)
        } finally {
            loading.value = false
        }

    }
    else {
        
        try {
            console.log('in the else')
            err.value = ""
            await fetch('https://localhost:7071/api/v1/Pokemon/AddPokeType?pokemonTypeName=' +
                pokemonTypeOne.value +
                '&pokemonName=' +
                pokemonName.value,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        SessionID: user.session
                    },
                })
                .then((response) => {
                    response.json().then((data) => {
                        console.log("full " + data)
                        console.log("Test " + data.err)
                        if (data.err) {

                            err.value = data.err
                            // console.log('error' + data.err)

                            console.log('fail')

                        }
                    })
                })
                .catch((err) => console.log(err))
        } catch (err) {
            console.log(err)

            try {
                console.log('in the else')
                err.value = ""
                await fetch('https://localhost:7071/api/v1/Pokemon/AddPokeType?pokemonTypeName=' +
                    pokemonTypeTwo.value +
                    '&pokemonName=' +
                    pokemonName.value,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            SessionID: user.session
                        },
                    })
                    .then((response) => {
                        response.json().then((data) => {
                            console.log("full " + data)
                            console.log("Test " + data.err)
                            if (data.err) {

                                err.value = data.err
                                // console.log('error' + data.err)

                                console.log('In if')

                            } else {
                                header.value = 'Success!'
                                body.value = 'You have successfully added your Pokemon!'

                            }
                        })
                    })
                    .catch((err) => console.log(err))
            } catch (err) {
                console.log(err)
            }
        } finally {
            loading.value = false
        }*/
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
