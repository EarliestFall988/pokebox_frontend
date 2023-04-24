<script setup>

import { ref, defineProps } from 'vue'
import { useImage } from '@vueuse/core'
import LoadingSpinnerViewVue from './LoadingSpinnerView.vue';

const props = defineProps(['url', 'name'])

const { isLoading } = useImage({ src: props.url })


</script>

<template>
    <!-- <Transition name="fade" appear> -->
    <div class="h-10 w-10 m-5 space-x-4 rounded animate-pulse transition" v-if="isLoading">
        <!-- <LoadingSpinnerViewVue /> -->
        <div class="bg-slate-500 w-full h-full rounded"></div>
        Fetching...
    </div>
    <div v-else
        class=" border-2 border-gray-300 hover:border-0 m-1 h-20 w-20 flex flex-col justify-between items-center bg-gray-800/60 rounded hover:scale-150 brightness-90 shadow-none hover:shadow-2xl hover:brightness-100 hover:bg-black/80 hover:z-20 transition duration-150 ">
        <img :src="url" class="w-9/12 h-9/12" :alt="name" />
        <p class="truncate text-ellipsis w-full text-center"> {{ name }}</p>
    </div>
    <!-- </Transition> -->
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