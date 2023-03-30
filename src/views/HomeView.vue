<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="hero min-h-full bg-base-200">
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

          <button class="btn btn-primary">
            <RouterLink to="/login">Push This Button!</RouterLink>
          </button>
        </div>
        <div class="my-20 lg:my-80"></div>
      </div>
    </div>
    <div>
      <div
        class="flex flex-wrap justify-around md:m-20 p-5 md:p-20 items-center bg-accent md:rounded shadow b"
      >
        <div class="my-5 mx-2">
          <h3 class="text-3xl font-bold text-white">Live Feed Activity</h3>
          <p class="text-white">See why Pokébox.zone is all the rage</p>
        </div>
        <div class="stats">
          <div class="stat place-items-center">
            <div class="stat-title">Downloads</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">From January 1st to February 1st</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">Users</div>
            <div class="stat-value text-secondary">4,200</div>
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
      <div class="flex md:justify-end m-20">
        <button class="btn btn-primary text-white shadow">
          <RouterLink to="/login">Check it out now!</RouterLink>
        </button>
      </div>
    </div>
  </main>
</template>
