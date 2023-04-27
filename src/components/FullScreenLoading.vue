<template>
  <div
    class="fixed top-0 bg-black/30 backdrop-blur-md h-screen w-screen flex justify-center items-center"
  >
    <LoadingSpinnerView />
    <p class="translate-x-5 -translate-y-2 italic text-white animate-bounce ">Hang on one sec...</p>
  </div>
</template>

<script setup>
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'
</script>
