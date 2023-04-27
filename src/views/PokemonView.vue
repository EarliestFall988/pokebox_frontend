<template>
  <main class="flex">
    <div class="z-20">
      <PanelView title="More" description="take a peek!">
        <div class="w-32 h-32">
          <!-- <div v-for="b in boxes" :key="b.id">
            <button @click="SelectNewBox(b.id)" class="text-white w-full btn btn-secondary my-2">
              {{ b.name }}
            </button>
          </div> -->
        </div>
      </PanelView>
    </div>
    <div class="w-full h-full m-2 rounded-lg p-2 text-white">
      <div class="fixed md:hidden left-0 bottom-0 z-20 w-full bg-gray-900 p-2">
        <button class="btn btn-primary mx-2 text-white">Boxes</button>
      </div>
      <div class="flex justify-center items-center">
        <button @click="incrementNumber('down')" class="btn btn-square hover:scale-110">
          <font-awesome-icon icon="arrow-left" class="w-6 h-6 text-white" />
        </button>
        <h2 class="text-3xl font-bold p-2 rounded text-center">
          Box #{{ currentPageNumber }} <span class="text-sm text-info"> of {{ numPages }}</span>
        </h2>
        <button @click="incrementNumber('up')" class="btn btn-square hover:scale-110">
          <font-awesome-icon icon="arrow-right" class="w-6 h-6 text-white" />
        </button>
      </div>
      <div v-if="pokemonOwned.length >= 1" class="flex justify-center items-center">
        <TransitionGroup
          name="list"
          tag="div"
          class="grid grid-cols-3 lg:grid-cols-8 font-bold text-sm"
        >
          <IconLoader
            v-for="p in pokemonOwned"
            :key="p.PokeOwnedID"
            class="m-2"
            :url="p.ImageLink"
            :name="p.NickName"
            :legendary="p.IsLegendary"
          />
        </TransitionGroup>
      </div>
      <div v-else class="flex justify-center items-center">
        <p class="mt-2 text-lg text-info italic bg-gray-800/50 w-full text-center py-5 rounded-lg">
          No pokemon to view...yet
        </p>
      </div>
    </div>
    <div class="hidden md:flex">
      <DetailsPanel />
    </div>

    <!-- <TostView @close="toggleShow()" :show="show">
      <div class="w-10 h-10">
        <LoadingSpinnerView />
      </div>
      <div class="w-48">
        <p class="animate-none"> <span class="text-lg font-bold"> Fetching data</span> </p>
        <p>hang in there :)</p>
      </div>
    </TostView> -->

    <Teleport to="body">
      <FullScreenLoading class="z-30" v-if="loadingData" />
    </Teleport>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DetailsPanel from '../components/DetailsPanel.vue'
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'
import IconLoader from '../components/IconLoader.vue'
import router from '../router'
import PanelView from '../components/PanelView.vue'
import TostView from '../components/TostView.vue'
import FullScreenLoading from '../components/FullScreenLoading.vue'

import { usePokemonStore } from '../stores/pokemon'

import { useUserStore } from '../stores/User.js'
import GenderIcons from '../components/GenderIcons.vue'

const user = useUserStore().user
const searchUser = useUserStore().searchUser

const loadingData = ref(false)

const pokemonStore = usePokemonStore()

const pokemon = pokemonStore.pokemon

const pokemonOwned = ref([])

const boxes = ref([
  {
    id: 1,
    name: 'My First Box'
  },
  {
    id: 2,
    name: 'I have this box too'
  },
  {
    id: 3,
    name: 'yoo another box'
  }
])

const selectedBox = ref(boxes.value[0])

const SelectNewBox = function (boxId) {
  selectedBox.value = boxes.value.find((b) => b.id === boxId)
  router.push('/pokemon')
}

const show = ref(true)
const toggleShow = () => {
  show.value = !show.value
}

const username = computed(() => {
  return searchUser.email
})

const loading = ref(false)
const errorText = ref('')
const numPages = ref('2')

const currentPageNumber = ref('1')

const incrementNumber = async (direction) => {
  if (direction === 'up') {
    if (currentPageNumber.value < numPages.value) {
      currentPageNumber.value++
      await fetchAllPokemonOwned()
    }
  } else if (direction === 'down') {
    if (currentPageNumber.value > 1) {
      currentPageNumber.value--
      await fetchAllPokemonOwned()
    }
  }
}

let fetchNumPages = async () => {
  console.log('attempting login')

  loading.value = true
  errorText.value = ''

  await fetch(
    'https://localhost:7071/api/v1/Pokemon/GetNumberOfPagesPokeOwned?username=' +
      username.value +
      '&pageNum=' +
      currentPageNumber.value,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        SessionID: user.session
      }
    }
  )
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
        if (data.err) {
          if (data.err) errorText.value = data.err
          else errorText.value = data.err
        } else {
          numPages.value = data
        }
      })
    })
    .catch((err) => console.log(err))

  loading.value = false
}

let fetchAllPokemonOwned = async () => {
  console.log('attempting login')

  loading.value = true
  errorText.value = ''

  await fetch(
    'https://localhost:7071/api/v1/Pokemon/SelectAllPokeOwnedOffset?username=' +
      username.value +
      '&pageNum=' +
      currentPageNumber.value,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        SessionID: user.session
      }
    }
  )
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
        if (data.err) {
          if (data.err) errorText.value = data.err
          else errorText.value = data.err
        } else {
          console.log(data)
          pokemonOwned.value = data
        }
      })
    })
    .catch((err) => console.log(err))

  loading.value = false
}

onMounted(async () => {
  loadingData.value = true

  await fetchNumPages()
  await fetchAllPokemonOwned()

  loadingData.value = false
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.125s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
}
</style>
