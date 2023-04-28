<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">/Add Your Pokemon</h1>
                <p class="py-6">Add your newest Pokemon to your box!</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <!-- <Transition name="slide" mode="out-in"> -->
                <div>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Pokemon Name</span>
                            </label>
                            <input v-model="pokemonName"
                                   type="text"
                                   placeholder="Pokemon Name"
                                   class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Nickname</span>
                            </label>
                            <input v-model="nickname"
                                   type="text"
                                   placeholder="Nickname"
                                   class="input input-bordered" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="label-text">Gender</span>
                            </label>
                            <select v-model="gender" class="select select-bordered w-full max-w-xs">

                                <option disabled selected>Gender</option>
                                <option value="0">Female</option>
                                <option value="1">Male</option>
                                <option value="2">Unknown</option>
                            </select>
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Level</span>
                            </label>
                            <input v-model="level" type="text" placeholder="Level" class="input input-bordered" />
                        </div>


                        <div class="form-control mt-6">
                            <button @click.prevent="attemptAddPokemonOwned"
                                    class="btn btn-primary bg-gradient-to-bl text-white font-bold from-blue-600 via-purple-500 to-red-400 border-0">
                                Catch 'em all!
                            </button>
                        </div>
                    </div>
                </div>
                <!--<div v-else>
                    <SpinnerComponent></SpinnerComponent>
                </div>-->
            </div>
        </div>
    </div>

    <Modal @clear="clear" :header="header" :body="body" />
</template>

<script setup>
    import { createRouter } from 'vue-router'
    import { ref } from 'vue'
    import Modal from '../components/ModalComponent.vue'
    import router from '../router'
    import SpinnerComponent from '../components/SpinnerComponent.vue'

    const pokemonName = ref('')
    const nickname = ref('')

    const gender = ref('')

    const level = ref('')

    const err = ref('')

    const header = ref('')
    const body = ref('')

    const loading = ref(false)

    const clear = () => {
        header.value = ''
        body.value = ''
    }

    let attemptLogin = async () => {
        //   console.log('attempting login')
        loading.value = true

        try {
            await fetch('https://localhost:7071/api/v1/Pokemon/CreatePokeOwned?username=' +
                username.value +
                '&pokemonName=' +
                pokemonName.value +
                '&name' +
                nickname.value +
                '&gender' +
                gender.value +
                '&level' +
                level.value,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        SessionID: user.session
                    },
                })
                .then((response) => {
                    response.json().then((data) => {
                        console.log(data)
                        if (data.status == '400') {
                            // console.log('error' + data.err)
                            alert(data.err)
                        } else {
                            router.push('/')
                            header.value = 'Success!'
                            body.value = 'You have successfully added your Pokemon!'
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
