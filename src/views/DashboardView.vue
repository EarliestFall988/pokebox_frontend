<template>
  <div class="text-center m-2">
    <h3 class="text-3xl font-bold text-white">Dashboard</h3>
    <p class="text-info italic">Check the health and wellbeing of the application</p>
  </div>

  <div class="md:w-3/4 md:m-auto">
    <h2 class="text-lg text-white font-bold mb-2 mx-2">Stats</h2>

    <div class="p-2 my-1 md:rounded-lg bg-gray-800/50 flex flex-wrap justify-around items-center">
      <h4 class="text-lg font-bold text-white w-30 h-30 my-4">
        Total Accounts: {{ accounts.length }}
      </h4>
      <PieChart loading="false" />
      <LineChart chartTitle="stats line chart example" loading="false" />
    </div>
  </div>

  <div class="md:w-3/4 m-5 mx-auto">
    <!-- <h2 class="text-lg text-white font-bold mb-2 mx-2">Accounts</h2> -->
    <div class="bg-gray-800/50 p-2 md:rounded-lg">
      <div class="tabs tabs-boxed">
        <button @click="toggleTab(0)" v-if="selectedTab != 0" class="tab">Accounts</button>
        <a v-else class="tab tab-active">Accounts</a>

        <button @click="toggleTab(1)" v-if="selectedTab != 1" class="tab">Pokemon</button>
        <a v-else class="tab tab-active">Pokemon</a>

        <button @click="toggleTab(2)" v-if="selectedTab != 2" class="tab">Items</button>
        <a v-else class="tab tab-active">Items</a>
      </div>
      <div>
        <AccountsListVue :accounts="accounts" v-if="selectedTab === 0" />
        <div v-if="selectedTab === 1">
          <PokeRankList
            :PokeAccountRank="PokeAccountRank"
            @fetchPokemonRank="fetchPokemonRank"
            :loadingPokemonRank="loadingPokemonRank"
          />
          <div v-if="selectedTab === 2">test2</div>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <YesNoModal
      :show="showModal"
      :title="modalTitle"
      :description="modalDescription"
      @yes="yes()"
      @no="no()"
    />
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
const toggleTab = function (tab) {
  selectedTab.value = tab
}

const accounts = ref([
  {
    id: 1,
    email: 'john.s.mitchel222@hotmail.co.uk',
    fName: 'John',
    lName: 'Mitchel',
    password: 'password',
    phone: '07777777777',
    address: '123 Fake Street',
    city: 'London',
    postcode: 'E1 1AA',
    country: 'United Kingdom'
  },
  {
    id: 2,
    email: 'hotchicka3342@gmail.com',
    fName: 'Jane',
    lName: 'Doe',
    password: 'password',
    phone: '01232212322',
    address: '123 Fake Street',
    city: 'London',
    postcode: 'E1 1AA',
    country: 'United Kingdom'
  },
  {
    id: 3,
    email: 'mmtrashdev@outlook.com',
    fName: 'Michael',
    lName: 'Mitchel',
    password: 'password',
    phone: '01234567890',
    address: '123 Fake Street',
    city: 'London',
    postcode: 'E1 1AA',
    country: 'United Kingdom'
  }
])

// const deleteAccount = function (id) {
//   accountToDelete.value = id
//   triggerModal('Delete Account', 'Are you sure you want to delete this account?')
// }

const modalTitle = ref('')
const modalDescription = ref('')
const showModal = ref(false)

const loadingPokemonRank = ref(true)

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

const loading = ref(false)
const errorText = ref('')
const PokeAccountRank = ref([])

const searchPokemonName = ref('ditto')

let fetchPokemonRank = async () => {
  console.log('attempting login')

  loadingPokemonRank.value = true

  loading.value = true
  errorText.value = ''

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

  loading.value = false
  loadingPokemonRank.value = false
}

onMounted(() => {
  // await fetchPokemonTypes(datetime.value)
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
