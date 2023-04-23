<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">/Login</h1>
        <p class="py-6">Take a peek at a curated collection managed by only you.</p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input v-model="Email" type="text" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="Password"
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <RouterLink to="/forgotpassword" class="label-text-alt italic link link-hover"
                >Forgot password?</RouterLink
              >
            </label>
          </div>
          <div class="form-control mt-6">
            <button
              v-if="!loading"
              @click.prevent="attemptLogin"
              class="btn btn-primary bg-gradient-to-bl text-white font-bold from-blue-600 via-purple-500 to-red-400 border-0"
            >
              let Me In
            </button>
            <div v-else>
            <SpinnerComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { createRouter } from 'vue-router'
import { ref } from 'vue'
import router from '../router'
import SpinnerComponent from '../components/SpinnerComponent.vue'
import { useUserStore } from '../stores/User'

const user = useUserStore().user

const Email = ref('')
const Password = ref('')

const errorText = ref('')

const loading = ref(false)

let attemptLogin = async () => {
  console.log('attempting login')

  loading.value = true

  await fetch('https://localhost:7071/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        email: Email.value,
        password: Password.value
      }
    })
  })
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
        if (data.error) {
          if (data.error.message) errorText.value = data.error.message
          else errorText.value = data.error
        } else {
          user.token = data.session
          user.email = data.email

          router.push('/')
        }
      })
    })
    .catch((err) => console.log(err))

  loading.value = false
}
</script>
