<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">/Add Your Item</h1>
                <p class="py-6">Add your newest Item!</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <!-- <Transition name="slide" mode="out-in"> -->
                <div>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Item Name</span>
                            </label>
                            <input v-model="itemName"
                                   type="text"
                                   placeholder="Item Name"
                                   class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <input v-model="description"
                                   type="text"
                                   placeholder="Description"
                                   class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Item Type Name</span>
                            </label>
                            <input v-model="itemTypeName"
                                   type="text"
                                   placeholder="Item Type Name"
                                   class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Item Image Link</span>
                            </label>
                            <input v-model="itemImageLink"
                                   type="text"
                                   placeholder="Item Image Link"
                                   class="input input-bordered" />
                        </div>

                        <p class="text-error text-center italic">{{ err }}</p>
                        <div class="form-control mt-6">
                            <button @click.prevent="attemptAddItem"
                                    class="btn btn-primary bg-gradient-to-bl text-white font-bold from-blue-600 via-purple-500 to-red-400 border-0">
                                Collect 'em all!
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
    import { ref, onMounted, computed } from 'vue'
    import { createRouter } from 'vue-router'
    import Modal from '../components/ModalComponent.vue'
    import router from '../router'
    import SpinnerComponent from '../components/SpinnerComponent.vue'

    import { useUserStore } from '../stores/User.js'

    const user = useUserStore().user
    const searchUser = useUserStore().searchUser

    const itemName = ref('')
    const description = ref('')
    const itemTypeName = ref('')
    const itemImageLink = ref('')

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

        try {
            if (itemName.value == '') {
                err.value = "Item Name is empty"
                return
            }
            if (description.value == '') {
                err.value = "Description is empty"
                return
            }
            if (itemTypeName.value == '') {
                err.value = "Item Type Name is empty"
                return
            }
            if (itemImageLink.value == '') {
                err.value = "Item Image Link is empty"
                return
            }

            err.value = ""
            await fetch('https://localhost:7071/api/v1/Items/AddItem?itemName=' +
                itemName.value +
                '&description=' +
                description.value +
                '&itemTypeName=' +
                itemTypeName.value +
                '&itemImageLink=' +
                itemImageLink.value,
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

                        } else {
                            header.value = 'Success!'
                            body.value = 'You have successfully added your Item!'

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
