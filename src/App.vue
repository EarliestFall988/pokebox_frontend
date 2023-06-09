<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from './router'
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

import { useUserStore } from './stores/User.js'

const user = useUserStore().user

const logout = function () {
  user.email = ''
  user.session = ''
  user.lastName = ''
  user.firstName = ''
  router.push('/')
}

onMounted(() => {
  themeChange(false)
})

const pokemonNav = function () {
  router.push('/pokemon')
  useUserStore().searchUser = user.email
}
</script>

<template>
  <header>
    <div class="navbar bg-base-300">
      <div class="flex-1">
        <RouterLink to="/" class="btn btn-ghost normal-case text-xl">
          <img src="./assets/graphics/logo.png" class="h-10 mr-1 -ml-2" />
          Pokébox.zone</RouterLink
        >
      </div>
      <div class="flex-none">
        <div class="hidden sm:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/about">About</RouterLink>
            </li>
            <li v-if="!user.session" class="bg-secondary rounded text-white">
              <RouterLink to="/login">Login</RouterLink>
            </li>
            <li v-else>
              <RouterLink to="/pokemon">Your Pokemon</RouterLink>
              <RouterLink to="/items">Your Items</RouterLink>
              <!-- <button @click="pokemonNav" class="btn btn-ghost">Your Pokemon</button> -->
              <RouterLink v-if="!user.isAdmin" to="/dashboard">Dashboard</RouterLink>
              <button @click="logout">Logout</button>
            </li>
          </ul>
        </div>
        <!-- <div class="flex sm:hidden">
          <div class="dropdown dropdown-bottom dropdown-end">
            <label tabindex="0" class="btn m-1">|||</label>
            <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <div>
                <RouterLink to="/">Home</RouterLink>
              </div>
              <div>
                <RouterLink to="/about">About</RouterLink>
              </div>
              <div v-if="user.session != null">
                <RouterLink to="/login">Login</RouterLink>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </header>
  <router-view v-slot="{ Component, route }">
    <!-- <transition :name="route.meta.transition || 'fade'" > -->
    <component :is="Component" />
    <!-- </transition> -->
  </router-view>
  <footer
    class="footer footer-center p-10 bg-base-200/70 text-base-content rounded backdrop-blur-lg"
  >
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
      <a class="link link-hover">Why Pokebox.zone?</a>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            ></path></svg
        ></a>
        <a
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path></svg
        ></a>
        <a
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            ></path></svg
        ></a>
      </div>
    </div>
    <div>
      <p>Copyright © 2023 - All right reserved by Whoami Industries Ltd</p>
    </div>
  </footer>
</template>

<style scoped>
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.9);
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
