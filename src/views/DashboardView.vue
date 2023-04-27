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
    <h2 class="text-lg text-white font-bold mb-2 mx-2">Accounts</h2>
    <div class="bg-gray-800/50 p-2 md:rounded-lg">
      <div class="flex items-center flex-wrap md:grid grid-cols-3 gap-4 my-2">
        <div class="col-span-2">
          <input
            type="text"
            class="p-2 rounded-lg md:w-full text-white input input-bordered max-w-xs"
            placeholder="Search Accounts..."
          />
          <button class="btn btn-primary text-white shadow mx-2">
            <RouterLink to="/register">Search</RouterLink>
          </button>
        </div>
        <div class="flex justify-end px-2 my-auto">
          <RouterLink to="/register">Create Account</RouterLink>
        </div>
      </div>

      <div class="flex">
        <div class="w-full text-white font-bold px-2 grid grid-cols-3">
          <p>username</p>
          <p class="text-center">full name</p>
          <p class="text-right">account type</p>
        </div>
        <div class="px-3"></div>
      </div>
      <div>
        <div v-if="accounts.length === 0" class="flex justify-center items-center">
          <p
            class="mt-2 text-lg text-info italic bg-gray-800/50 w-full text-center py-5 rounded-lg"
          >
            No accounts to view...yet
          </p>
        </div>
        <div v-else>
          <div
            v-for="a in accounts"
            :key="a.id"
            class="p-1 rounded-lg flex items-center justify-between"
          >
            <AccountListItem
              @delete="deleteAccount(a.id)"
              :email="a.email"
              :fullName="a.fName + ' ' + a.lName"
              :admin="false"
            />
          </div>
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
import PieChart from '../components/Charts/PieChart.vue'
import LineChart from '../components/Charts/LineChart.vue'
import AccountListItem from '../components/AccountListItem.vue'
import FullScreenLoading from '../components/FullScreenLoading.vue'
import YesNoModal from '../components/YesNoModal.vue'

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

const deleteAccount = function (id) {
  accountToDelete.value = id
  triggerModal('Delete Account', 'Are you sure you want to delete this account?')
}

const modalTitle = ref('')
const modalDescription = ref('')
const showModal = ref(false)

const accountToDelete = ref(-1)

const triggerModal = function (title, description) {
  modalTitle.value = title
  modalDescription.value = description
  showModal.value = true
}

const yes = function () {
  showModal.value = false
  accounts.value = accounts.value.filter((a) => a.id !== accountToDelete.value) //fix this...
  accountToDelete.value = -1
}

const no = function (before, now) {
  showModal.value = false
}

let fetchAllPokemonOwned = async () => {
  console.log('attempting login')

  loading.value = true
  errorText.value = ''

  await fetch(
    'https://localhost:7071/api/v1/Pokemon/PokeTypeCount?username=' + username.value,
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

onMounted(() => {
  // await fetchPokemonTypes(datetime.value)

})
</script>
