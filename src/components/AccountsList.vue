<template>
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
    <div class="w-full text-white px-2 grid grid-cols-3">
      <p>username</p>
      <p class="text-center">full name</p>
      <p class="text-right">account type</p>
    </div>
    <div class="px-3"></div>
  </div>
  <div>
    <div v-if="accounts.length === 0" class="flex justify-center items-center">
      <p class="mt-2 text-lg text-info italic bg-gray-800/50 w-full text-center py-5 rounded-lg">
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
          @details="changeDetails()"
          :email="a.UserName"
          :fullName="a.FirstName + ' ' + a.LastName"
          :admin="a.IsAdmin"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import AccountListItem from './AccountListItem.vue'

const props = defineProps(['accounts'])

let changeDetails = async () => {
  console.log('attempting login')
  errorText.value = ''
}

onMounted(() => {
  console.log(props.accounts)
})
</script>
