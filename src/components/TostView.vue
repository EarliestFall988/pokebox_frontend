<template>
    <div class="fixed bottom-2 right-2">
        <transition name="fade" appear>
            <button v-if="show" @click="$emit('close')"
                class="text-left text-white flex hover:scale-110 hover:-translate-x-4 hover:-translate-y-2 hover:bg-green-500 justify-between items-center  p-4 rounded-lg bg-success transition-all duration-200 z-20 shadow-2xl border-2 border-green-300">
                <slot />
            </button>
        </transition>
    </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue'
import LoadingSpinnerView from './LoadingSpinnerView.vue';

defineEmits(['close'])

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>