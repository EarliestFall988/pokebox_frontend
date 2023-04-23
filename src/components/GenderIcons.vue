<script setup>
import { defineProps } from 'vue'

defineProps(['gender'])
</script>

<template>
  <div>
    <div v-if="gender == 'male'">
      <font-awesome-icon icon="mars" class="w-6 h-6" />
    </div>
    <div v-else-if="gender == 'female'">
      <font-awesome-icon icon="venus" class="w-6 h-6" />
    </div>
    <div v-else-if="gender == 'other'">
      <font-awesome-icon icon="venus-mars" class="w-6 h-6" />
    </div>
    <div v-else>
      <font-awesome-icon icon="circle" class="w-6 h-6" />
    </div>
  </div>
</template>
