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
            :key="p"
            class="m-2"
            :url="p.ItemTypeName"
            :name="p.ItemName"
            :item="true"
            @select="selectItem(p.ItemName)"
          />
        </TransitionGroup>
      </div>
      <div v-else class="flex justify-center items-center">
        <p class="mt-2 text-lg text-info italic bg-gray-800/50 w-full text-center py-5 rounded-lg">
          No items to view...yet
        </p>
      </div>
    </div>
    <div v-if="selectedItemName != null" class="hidden md:flex">
      <!-- <DetailsPanel /> -->
      <PanelView
        class="bg-gray-800/50 rounded-none m-0 w-56 flex justify-start"
        title="Items"
        description="Tools of the trade."
      >
        <Transition name="list" appear mode="out-in">
          <!-- <PokemonDetailsView
            v-if="!selectedPokemon.IsLegendary"
            :selectedPokemon="selectedPokemon"
          />
          <PokemonDetailsView
            v-else
            :selectedPokemon="selectedPokemon"
            class="bg-gradient-to-br from-yellow-800 to-red-900/20 border-t-2 border-yellow-600"
          /> -->
          <div class="flex flex-col justify-center items-start">
            <img :src="selectedItemURL" class="w-32 h-32" />
            <p class="text-center w-[100%] font-bold text-lg truncate">
              {{ selectedItemName.replace('-', ' ') }}
            </p>
          </div>
        </Transition>
      </PanelView>
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
// import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'
import IconLoader from '../components/IconLoader.vue'
// import router from '../router'
import PanelView from '../components/PanelView.vue'
import FullScreenLoading from '../components/FullScreenLoading.vue'

import { useUserStore } from '../stores/User.js'

import PokemonDetailsView from '../components/PokemonDetailsView.vue'

const user = useUserStore().user
const searchUser = useUserStore().searchUser

const loadingData = ref(true)

const pokemonOwned = ref([])

const selectedItemName = ref(null)
const selectedItemURL = ref(null)
// const selectedItemT

const selectItem = function (name) {
  var res = pokemonOwned.value.find((p) => p.ItemName === name)

  selectedItemName.value = res.ItemName
  selectedItemURL.value = res.ItemTypeName
}

// const selectPokemon = function (id) {
//   selectedPokemon.value = pokemonOwned.value.find((p) => p.PokeOwnedID === id)
//   console.log(selectedPokemon.value)
// }

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
    'https://localhost:7071/api/v1/Items/GetNumberOfPagesItems?username=' +
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
      console.log(response)

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
    'https://localhost:7071/api/v1/Items/SelectAllItemOwnedOffset?username=' +
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
      console.log(response)

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

  // selectedPokemon.value = pokemonOwned.value[0]

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
  transform: translateY(-50px);
}
</style>
