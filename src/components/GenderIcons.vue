<script setup>
import { defineProps } from 'vue'

defineProps(['gender'])
</script>

<template>
  <div>
    <div v-if="gender === 1">
      <font-awesome-icon icon="mars" class="w-4 h-4" />
    </div>
    <div v-else-if="gender === 0">
      <font-awesome-icon icon="venus" class="w-4 h-4" />
    </div>
    <div v-else-if="gender == '2'">
      <font-awesome-icon icon="venus-mars" class="w-4 h-4" />
    </div>
    <div v-else>
      <font-awesome-icon icon="circle" class="w-4 h-4" />
      <p>{{ gender }}</p>
    </div>
  </div>
</template>
