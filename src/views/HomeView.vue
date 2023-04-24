<template>
  <main>
    <div class="hero min-h-full bg-base-200 z-20">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://www.netclipart.com/pp/f/6-66352_transparent-background-pokemon-clipart-pokemon-character-clip-art.png"
          class="w-[40%] m-auto lg:flex sm:max-w-sm rounded-lg"
        />
        <div>
          <h1 class="text-5xl font-bold">Hello There!</h1>
          <p class="py-6">
            Browse our collection today and join the millions of fans around the world who choose
            Pokébox.zone for their Pokémon needs. Are you ready?
          </p>

          <!-- <button class="btn btn-primary"> -->
            <RouterLink class="btn btn-primary " to="/register">Push This Button!</RouterLink>
          <!-- </button> -->
        </div>
        <div class="my-20 lg:my-80"></div>
      </div>
    </div>
    <div>
      <div
        class="flex flex-wrap justify-around md:my-20 p-5 md:py-20 items-center bg-accent md:rounded shadow b"
      >
        <div class="my-5 mx-2">
          <h3 class="text-3xl font-bold text-white">Live Feed Activity</h3>
          <p class="text-white">Cold, hard data about why Pokébox.zone is all the rage</p>
        </div>
        <div class="stats">
          <div class="stat place-items-center">
            <div class="stat-title">Downloads</div>
            <div class="stat-value">{{ downloadCount }}</div>
            <div class="stat-desc">From January 1 to {{ date }}</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">Users</div>
            <div class="stat-value text-secondary">{{ userCount }}</div>
            <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">New Registers</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap md:m-5 justify-around items-center">
        <div class="flex flex-col w-[90%] md:w-[40%] m-auto py-5">
          <p class="text-lg">
            Catching Pokémon is a thrilling experience that has captivated fans for decades. The
            rush of adrenaline as you track down your target, the excitement of the battle, and the
            joy of finally catching your prize make it all worth it.
          </p>
          <div class="mt-10">
            <p class="text-3xl italic">
              'There's nothing quite like the feeling of catching a new Pokémon. It's like unlocking
              a new level of the game and it never gets old...'
            </p>
            <p class="m-2">-Oliver Stoneham</p>
          </div>
        </div>
        <img
          src="https://www.pinclipart.com/picdir/big/527-5272723_pokemon-pikachu-png-clipart-pikachu-transparent-background.png"
          class="rounded-lg"
        />
      </div>
      <div class="text-3xl text-center mt-10 text-white">Pricing</div>
      <div class="flex flex-wrap md:m-5 justify-around items-center bg-accent rounded-lg py-10 text-white">
        <div class="w-60 h-96 rounded-lg p-2">
          <div class="text-center text-lg font-bold m-4">Starter Pack</div>
          <div class="w-60 m-auto h-60">
            <div class="flex flex-col items-center">
              <p class="my-2">Access to your pokemon</p>
              <p class="my-2">Join Clans</p>
              <p class="my-2">Delete your account</p>
              <p class="my-2">No Credit Card Needed</p>
            </div>
          </div>
          <p class="text-center mt-5 text-2xl font-bold">$0</p>
        </div>
        <div class="w-60 h-96 rounded-lg p-2 bg-primary shadow-lg">
          <div class="text-center text-lg font-bold m-4">Recommended</div>
          <div class="w-60 m-auto h-60">
            <div class="flex flex-col items-center">
              <p class="my-2">Access to your pokemon</p>
              <p class="my-2">Join Clans</p>
              <p class="my-2">Delete your account</p>
              <p class="my-2">Create and manage clans</p>
            </div>
          </div>
          <p class="text-center mt-5 text-2xl font-bold">$20</p>
        </div>
        <div class="w-60 h-96 rounded-lg p-2">
          <div class="text-center text-lg font-bold m-4">Enterprise</div>
          <div class="w-60 m-auto h-60">
            <div class="flex flex-col items-center">
              <p class="my-2">Access to your pokemon</p>
              <p class="my-2">Join Clans</p>
              <p class="my-2">Delete your account</p>
              <p class="my-2">Create and manage clans</p>
              <p class="my-2">24hr tech support</p>
            </div>
          </div>
          <p class="text-center mt-5 text-2xl font-bold">$150</p>
        </div>
      </div>
      <div class="flex md:justify-end m-20">
        <button class="btn btn-primary text-white shadow">
          <RouterLink to="/register">Check it out now!</RouterLink>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const date = computed(() => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  today = monthNames[parseInt(mm - 1)] + ' ' + dd

  return today
})

const userCount = computed(() => {
  return Math.ceil(Math.random() * (1000 - 100) + 1000)
})

const downloadCount = computed(() => {
  return (
    Math.ceil(Math.random() * (9000 - 100) + 10000)
      .toString()
      .substring(0, 2) + 'K'
  )
})
</script>
