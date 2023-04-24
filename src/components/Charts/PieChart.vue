<template>
  <div v-if="loading === 'false'" class="w-64 h-64 m-6">
    <Pie :data="data" :options="options" />
    <h3 class="text-lg font-bold text-white">{{ chartTitle || 'Pie Chart' }}</h3>
  </div>
  <div v-else class="w-64 h-64 mb-6 bg-gray-800/30 animate-pulse">
    <SpinnerComponent />
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../../config/chartConfig.js'
import SpinnerComponent from '../SpinnerComponent.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps(['chartTitle', 'data', 'options', 'loading'])

const options = ref(props.options || chartConfig.pieOptions)
const data = ref(props.data || chartConfig.data)
</script>
