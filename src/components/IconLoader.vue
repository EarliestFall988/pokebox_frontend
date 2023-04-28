<script setup>
import { defineProps, defineEmits } from 'vue'
import { useImage } from '@vueuse/core'
import LoadingSpinnerViewVue from './LoadingSpinnerView.vue'

const props = defineProps(['url', 'name', 'legendary', 'item'])

defineEmits(['select'])

const { isLoading } = useImage({ src: props.url })
</script>

<template>
  <button @click="$emit('select')" v-if="!legendary">
    <Transition name="fade" appear>
      <div
        class="bg-gray-800/60 rounded hover:scale-150 brightness-90 shadow-none hover:shadow-2xl hover:brightness-100 hover:bg-black/80 hover:z-20 transition duration-150 hover:border-0 m-1 h-20 w-20 flex flex-col justify-between items-center"
      >
        <div v-if="isLoading">
          <LoadingSpinnerViewVue />
        </div>
        <div v-else class="flex flex-wrap items-center justify-center">
          <div v-if="!item">
            <img :src="url" class="w-9/12 h-9/12" :alt="name" />
            <p class="truncate text-ellipsis w-full text-center">{{ name }}</p>
          </div>
          <div v-else class="flex flex-col justify-between items-center w-20 h-20 p-2" >
            <img :src="url" class="w-10 h-10" :alt="name" />
            <p class="truncate text-ellipsis w-full text-center">{{ name.replace('-', ' ') }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </button>
  <button @click="$emit('select')" v-else>
    <Transition name="fade" appear>
      <div
        class="bg-gray-700/60 border-yellow-300 border-2 rounded hover:scale-150 hover:bg-yellow-800 brightness-90 shadow-none hover:shadow-2xl hover:brightness-100 hover:bg-black/80 hover:z-20 transition duration-150 hover:border-0 m-1 h-20 w-20 flex flex-col justify-between items-center"
      >
        <div v-if="isLoading">
          <LoadingSpinnerViewVue />
        </div>
        <div v-else class="flex flex-wrap items-center justify-center">
          <img :src="url" class="w-9/12 h-9/12" :alt="name" />
          <p class="truncate text-ellipsis w-full text-center">{{ name }}</p>
        </div>
      </div>
    </Transition>
  </button>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
