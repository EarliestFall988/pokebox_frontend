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
          </div>
          <p class="text-error text-center italic">{{ errorText }}</p>
          <div class="form-control mt-6">
            <button
              @click.prevent="attemptLogin"
              class="btn btn-primary bg-gradient-to-bl text-white font-bold from-blue-600 via-purple-500 to-red-400 border-0 hover:scale-110"
            >
              <div v-if="!loading">let Me In</div>
              <div v-else>
                <LoadingSpinnerView class="scale-100 translate-y-1" />
              </div>
            </button>
            <div class="label mt-2">
              <RouterLink
                to="/forgotpassword"
                class="w-full text-center label-text-alt italic link link-hover"
                >Forgot password?</RouterLink
              >
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
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'

const user = useUserStore().user
const searchUser = useUserStore().searchUser

const Email = ref('')
const Password = ref('')

const errorText = ref('')

const loading = ref(false)

let attemptLogin = async () => {
  console.log('attempting login')

  loading.value = true
  errorText.value = ''

  const em = Email.value
  const pass = Password.value

  await fetch('https://localhost:7071/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        email: em,
        password: pass
      }
    })
  })
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
        if (data.err) {
          if (data.err) errorText.value = data.err
          else errorText.value = data.err
        } else {
          user.session = data.session
          user.email = data.email

          searchUser.email = data.email

          router.push('/pokemon')
        }
      })
    })
    .catch((err) => console.log('Error' + err))

  loading.value = false
}
</script>
