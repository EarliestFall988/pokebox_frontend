<template>
  <div
    class="fixed top-0 bg-black/80 backdrop-blur-lg h-screen w-screen flex justify-center items-center"
  >
    <LoadingSpinnerView />
    <p class="translate-x-5 -translate-y-1 italic text-white">Hang on one sec...</p>
  </div>
</template>

<script setup>
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'
</script>
