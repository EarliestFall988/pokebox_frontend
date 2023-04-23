<template>
  <main class="flex">
    <PanelView title="Boxes" description="take a peek!">
      <div class="w-32 h-32">
        <div v-for="b in boxes" :key="b.id">
          <button @click="SelectNewBox(b.id)" class="text-white w-full btn btn-secondary my-2">{{ b.name }}</button>
        </div>
      </div>
    </PanelView>
    <div class="w-full h-full m-2 rounded-lg p-2 text-white">
      <h2 class="text-3xl font-bold p-2 rounded text-center">{{ selectedBox.name }}</h2>
      <div class="flex justify-center items-center">
        <TransitionGroup name="list" tag="div" class="grid grid-cols-3 lg:grid-cols-10 font-bold text-sm">
          <IconLoader v-for="p in pokemon" :key="p.id" :url="p.img" :name="p.name" class="m-2" />
        </TransitionGroup>
      </div>

    </div>
    <DetailsPanel />

    <TostView @close="toggleShow()" :show="show">
      <div class="w-10 h-10">
        <LoadingSpinnerView />
      </div>
      <div class="w-48">
        <p class="animate-none"> <span class="text-lg font-bold"> Fetching data</span> </p>
        <p>hang in there :)</p>
      </div>
    </TostView>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import DetailsPanel from '../components/DetailsPanel.vue'
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue';
import IconLoader from '../components/IconLoader.vue';
import router from '../router'
import PanelView from '../components/PanelView.vue';
import TostView from '../components/TostView.vue';

import { usePokemonStore } from '../stores/pokemon'

const pokemonStore = usePokemonStore()

const pokemon = pokemonStore.pokemon;

const boxes = ref([
  {
    id: 1,
    name: 'My First Box',
  },
  {
    id: 2,
    name: 'I have this box too',
  },
  {
    id: 3,
    name: 'yoo another box',
  }
])

const selectedBox = ref(boxes.value[0])

const SelectNewBox = function (boxId) {
  selectedBox.value = boxes.value.find(b => b.id === boxId)
  router.push('/pokemon');
}

const show = ref(true)
const toggleShow = () => {
  show.value = !show.value
}
</script>

<style scoped >
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
