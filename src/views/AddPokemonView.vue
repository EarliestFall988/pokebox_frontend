<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">/Register</h1>
        <p class="py-6">Take a peek at a curated collection managed by only you.</p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <!-- <Transition name="slide" mode="out-in"> -->
        <div v-if="!loading">
          <div v-show="page == 0" class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">First Name</span>
              </label>
              <input
                v-model="firstName"
                type="text"
                placeholder="First Name"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Last Name</span>
              </label>
              <input
                v-model="lastName"
                type="text"
                placeholder="Last Name"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Administrator</span>
              </label>
              <input type="checkbox" class="toggle" checked />
            </div>
          </div>
          <!-- </Transition> -->
          <!-- <Transition name="slide" mode="out-in"> -->
          <div v-show="page == 1" class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input v-model="email" type="text" placeholder="Email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Password x2</span>
              </label>
              <input
                v-model="password2"
                type="password"
                placeholder="Password x2"
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <button
                @click.prevent="attemptLogin"
                class="btn btn-primary bg-gradient-to-bl text-white font-bold from-blue-600 via-purple-500 to-red-400 border-0"
              >
                let Me In
              </button>
            </div>
          </div>

          <!-- </Transition> -->

          <div class="btn-group grid grid-cols-2">
            <button @click="page -= 1" :disabled="page != 1" class="btn">Back</button>
            <button @click="page += 1" :disabled="page != 0" class="btn">Next</button>
          </div>
        </div>
        <div v-else>
          <SpinnerComponent></SpinnerComponent>
        </div>
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

const email = ref('')
const password = ref('')
const password2 = ref('')

const firstName = ref('')
const lastName = ref('')
const admin = ref(false)

const page = ref(0)

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
  //   console.log('email ' + JSON.parse(options.body).user.email)

  try {
    await fetch('https://localhost:7071/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email.value,
          password: password.value,
          password2: password2.value,
          firstName: firstName.value,
          lastName: lastName.value,
          admin: admin.value
        }
      })
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
            body.value = 'You have successfully registered! Please login.'
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
