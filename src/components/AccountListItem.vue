<template>
  <div class="flex flex-col w-full rounded-lg border-2 border-gray-800/90 p-2">
    <div class="flex items-center justify-between">
      <button
        @click="toggleDetails"
        class="text-white w-full grid grid-cols-3 grid-rows-none gap-10 transition-all duration-200 rounded"
      >
        <p class="text-left truncate">{{ email }}</p>
        <p class="text-sm my-auto w-full truncate">{{ fullName }}</p>
        <div v-if="admin">
          <p class="text-sm my-auto w-full text-right">administrator</p>
        </div>
        <div v-else>
          <p class="text-sm my-auto w-full text-right">user</p>
        </div>
      </button>
      <button @click="toggleDetails" class="pl-2 my-auto">
        <div v-if="!openDetails">
          <font-awesome-icon
            icon="angle-down"
            class="w-6 h-6 text-white rounded transition-all duration-200 hover:scale-110"
          />
        </div>
        <div v-else>
          <font-awesome-icon
            icon="angle-up"
            class="w-6 h-6 text-white rounded transition-all duration-200 hover:scale-110"
          />
        </div>
      </button>
    </div>
    <div v-if="openDetails" class="flex justify-end items-center">
      <button
        @click="$emit('details')"
        class="bg-blue-500 rounded text-white p-1 mr-2 flex hover:scale-105 transition-all duration-150"
      >
        <font-awesome-icon icon="arrow-up-right-from-square" class="w-4 h-4 my-auto text-white" />
        <p class="my-auto mx-2">Details</p>
      </button>

    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
defineProps(['email', 'fullName', 'admin'])

defineEmits(['delete', 'details'])

const openDetails = ref(false)

const toggleDetails = function () {
  openDetails.value = !openDetails.value
}
</script>
