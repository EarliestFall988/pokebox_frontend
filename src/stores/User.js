import { ref, computed, toRaw } from 'vue'
import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { onUnmounted } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      session: '',
      isAdmin: false
    })

    const searchUser = ref({
      email: ''
    })

    return { user, searchUser }
  },
  { persist: true }
)
