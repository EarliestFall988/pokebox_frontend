<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="header && body"
        class="fixed top-0 h-[100%] w-screen bg-neutral-500/10 backdrop-blur flex justify-center items-center"
      >
        <div class="p-10 w-3/12 bg-gray-900 rounded-lg text-white shadow-lg">
          <div class="mb-10">
            <div class="text-2xl font-bold text-primary">{{ header }}</div>
            <p>{{ body }}</p>
          </div>
          <div class="flex justify-end">
            <button @click="$emit('clear')" class="btn btn-primary">Yep</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

defineProps({
  header: String,
  body: String
})

defineEmits(['clear'])
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
