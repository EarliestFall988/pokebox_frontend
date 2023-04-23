<template>
  <div class="bg-base-200 p-4 m-1 rounded-2xl">
    <div>
      <h3 class="text-white text-2xl font-bold -mb-2">Selected Pokemon</h3>
      <p class="mb-3 text-accent">Let's see what you've got</p>
    </div>
    <Transition name="slide" mode="out-in" appear>
      <KeepAlive>
        <Suspense>
          <template #default>
            <AsyncPokemonDetailsController name="jeff" userName="ltd.houser137@hotmail.co.uk" gender="male" species="Squirtle" />
          </template>
          <template #fallback>
            <div class="flex flex-col justify-center items-center mt-5 w-64 h-64">
              <LoadingSpinnerView class="-mb-2" />
              <p class="p-2 italic text-white/50">One sec...</p>
            </div>
          </template>
        </Suspense>
      </KeepAlive> 
    </Transition>
  </div>
</template>

<script setup>
import AsyncPokemonDetailsController from '../components/AsyncPokemonDetailsController.vue'
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
