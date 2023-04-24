<template>
  <div v-if="loading === 'false' || !loading" class="m-6 md:w-7/12 w-full h-64">
    <Line :data="data" :options="options" />
    <h2 class="w-full text-center text-lg font-bold text-white">
      {{ chartTitle || 'line chart' }}
    </h2>
  </div>
  <div v-else class="w-7/12 h-64 mb-6 bg-gray-800/60 rounded animate-pulse">
    <SpinnerComponent />
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { ref, defineProps } from 'vue'
import SpinnerComponent from '../SpinnerComponent.vue'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const props = defineProps(['chartTitle', 'data', 'options', 'loading'])

const options = ref(
  props.options || {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month'
        },

        ticks: {
          maxRotation: 45,
          minRotation: 45,
          color: 'slategray'
        },
        grid: {
          color: 'slategray'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          color: 'slategray'
        },
        grid: {
          color: 'slategray'
        }
      }
    }
  }
)

const data = ref(
  props.data || {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 39, 10, 40, 39, 80, 40],
        borderColor: 'red'
      },
      {
        label: 'Data two',
        backgroundColor: '#79b3f8',
        data: [93, 45, 20, 40, 22, 92, 32],
        borderColor: 'blue'
      }
    ]
  }
)
</script>
