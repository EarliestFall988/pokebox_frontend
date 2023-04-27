<template>
  <div class="text-center m-2">
    <h3 class="text-3xl font-bold text-white">Dashboard</h3>
    <p class="text-info italic">Check the health and wellbeing of the application</p>
  </div>

  <div class="md:w-3/4 md:m-auto">
    <h2 class="text-lg text-white font-bold mb-2 mx-2">Stats</h2>

    <div class="p-2 my-1 md:rounded-lg bg-gray-800/50 flex flex-wrap justify-around items-center">
      <div class="text-center bg-gray-800 p-4 rounded">
        <h4 class="text-3xl font-bold text-white w-30 h-30 my-4">
          {{ accounts.length }}
        </h4>
        <p class="text-white">Total Accounts</p>
      </div>
      <PieChart loading="false" />
      <LineChart chartTitle="stats line chart example" loading="false" />
    </div>
  </div>

  <div class="md:w-3/4 m-5 mx-auto">
    <!-- <h2 class="text-lg text-white font-bold mb-2 mx-2">Accounts</h2> -->
    <div class="bg-gray-800/50 p-2 md:rounded-lg">
      <div class="tabs tabs-boxed">
        <button @click="toggleTab(0)" v-if="selectedTab != 0" class="tab">Accounts</button>
        <a v-else class="tab tab-active text">Accounts</a>

        <button @click="toggleTab(1)" v-if="selectedTab != 1" class="tab">Pokemon</button>
        <a v-else class="tab tab-active">Pokemon</a>

        <button @click="toggleTab(2)" v-if="selectedTab != 2" class="tab">Items</button>
        <a v-else class="tab tab-active">Items</a>
      </div>
      <div>
        <AccountsListVue :accounts="accounts" v-if="selectedTab === 0" />
        <div v-if="selectedTab === 1">
          <PokeRankList :PokeAccountRank="PokeAccountRank" :loadingPokemonRank="loadingPokemonRank">
            <input
              type="text"
              class="p-2 rounded-lg md:w-full text-white input input-bordered max-w-xs"
              placeholder="Search Pokemon..."
              v-model="searchPokemonName"
            />
            <button @click="fetchPokemonRank" class="btn btn-primary text-white shadow mx-2">
              <!-- <RouterLink to="/register">Search</RouterLink> -->
              Search
            </button>
          </PokeRankList>
        </div>
        <div v-if="selectedTab == 2">
          <div class="flex items-center flex-wrap md:grid grid-cols-3 gap-4 my-2">
            <div class="col-span-2">
              <!-- <input
                type="text"
                class="p-2 rounded-lg md:w-full text-white input input-bordered max-w-xs"
                placeholder="Search Pokemon..."
                v-model="searchPokemonName"
              />
              <button
                @click="$emit('fetchPokemonRank')"
                class="btn btn-primary text-white shadow mx-2"
              > 
              Search
              </button> -->
              <button @click="fetchItemsList" class="btn text-white shadow mx-2">Load Items</button>
              <!-- <RouterLink to="/register">Search</RouterLink> -->
            </div>
            <div class="flex justify-end px-2 my-auto">
              <!-- <RouterLink to="/register">Create Account</RouterLink> -->
            </div>
          </div>
          <div class="w-full">
            <div v-if="!loadingItems">
              <div v-if="allItems.length === 0" class="flex justify-center items-center">
                <p
                  class="mt-2 text-lg text-info italic bg-gray-800/50 w-full text-center py-5 rounded-lg"
                >
                  No Items to view...yet
                </p>
              </div>
              <div v-else>
                <div class="grid grid-cols-3 w-full p-2 text-white m-1 rounded">
                  <p>ItemOwnedID</p>
                  <p class="text-center">UserID</p>
                  <p class="text-right">ItemID</p>
                </div>

                <!-- {{ allItems }} -->

                <div
                  v-for="a in allItems"
                  :key="a"
                  class="grid grid-cols-3 w-full p-2 bg-gray-800 text-white m-1 rounded"
                >
                  <p class="truncate">#{{ a.ItemOwnedID }}</p>
                  <p class="text-center truncate">{{ a.UserID }}</p>
                  <p class="text-right truncate">{{ a.ItemID }}</p>
                </div>
              </div>
            </div>

            <div v-else>
              <LoadingSpinnerView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <!-- <YesNoModal
      :show="showModal"
      :title="modalTitle"
      :description="modalDescription"
      @yes="yes()"
      @no="no()"
    /> -->

    <div v-if="loading">
      <FullScreenLoading />
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePokemonStore } from '../stores/pokemon'
import { useUserStore } from '../stores/User'
import PieChart from '../components/Charts/PieChart.vue'
import LineChart from '../components/Charts/LineChart.vue'
import AccountsListVue from '../components/AccountsList.vue'
import FullScreenLoading from '../components/FullScreenLoading.vue'
import YesNoModal from '../components/YesNoModal.vue'
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'
import PokeRankList from '../components/PokeRankList.vue'

const user = useUserStore().user

const selectedTab = ref(0)
const toggleTab = async (tab) => {
  selectedTab.value = tab
  if (tab == 0) {
    await fetchUsers()
  }
}

const accounts = ref([])

// const deleteAccount = function (id) {
//   accountToDelete.value = id
//   triggerModal('Delete Account', 'Are you sure you want to delete this account?')
// }

const modalTitle = ref('')
const modalDescription = ref('')
const showModal = ref(false)

const loadingPokemonRank = ref(false)

// const accountToDelete = ref(-1)

// const triggerModal = function (title, description) {
//   modalTitle.value = title
//   modalDescription.value = description
//   showModal.value = true
// }

// const yes = function () {
//   showModal.value = false
//   accounts.value = accounts.value.filter((a) => a.id !== accountToDelete.value) //fix this...
//   accountToDelete.value = -1
// }

// const no = function (before, now) {
//   showModal.value = false
// }

const loading = ref(true)
const errorText = ref('')
const PokeAccountRank = ref([])

const searchPokemonName = ref('ditto')

const allItems = ref([])
const loadingItems = ref(false)

let fetchUsers = async () => {
  console.log('attempting login')
  errorText.value = ''

  await fetch('https://localhost:7071/api/Accounts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      SessionID: user.session
    }
  })
    .then((response) => {
      console.log(response)
      response.json().then((data) => {
        console.log(data)
        if (data.err) {
          if (data.err) errorText.value = data.err
          else errorText.value = data.err
        } else {
          console.log(data)
          accounts.value = data
        }
      })
    })
    .catch((err) => console.log(err))
}

let fetchPokemonRank = async () => {
  console.log('attempting login')

  loadingPokemonRank.value = true

  // loading.value = true
  errorText.value = ''

  if (searchPokemonName.value == '') {
    PokeAccountRank.value = []
    return
  }

  await fetch(
    'https://localhost:7071/api/v1/Pokemon/PokeRank?pokemonName=' + searchPokemonName.value,
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
          PokeAccountRank.value = data
        }
      })
    })
    .catch((err) => console.log(err))

  // loading.value = false
  loadingPokemonRank.value = false
}

let fetchItemsList = async () => {
  loadingItems.value = true

  await fetch('https://localhost:7071/api/v1/Items/SelectAllItemsOwned', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      SessionID: user.session
    }
  })
    .then((response) => {
      response.json().then((data) => {
        console.log(data)
        if (data.err) {
          if (data.err) errorText.value = data.err
          else errorText.value = data.err
        } else {
          console.log(data)
          allItems.value = data
        }
      })
    })
    .catch((err) => console.log(err))

  loadingItems.value = false
}

onMounted(async () => {
  // await fetchPokemonTypes(datetime.value)
  loading.value = true
  await fetchUsers()

  loading.value = false
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
