import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowUpRightFromSquare,
  faUserMinus,
  faUserSecret,
  faVenusMars,
  faVenus,
  faMars,
  faFire,
  faDroplet,
  faBolt,
  faSnowflake,
  faSkullCrossbones,
  faLeaf,
  faFeatherAlt,
  faDragon,
  faBug,
  faGhost,
  faUserNinja,
  faCircle,
  faHandFist,
  faBrain,
  faMountain,
  faHandRock,
  faMoon,
  faShieldAlt,
  faStar,
  faHillRockslide,
  faX,
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faVenusMars)
library.add(faVenus)
library.add(faMars)

library.add(faFire)
library.add(faDroplet)
library.add(faBolt)
library.add(faSnowflake)
library.add(faSkullCrossbones)
library.add(faLeaf)
library.add(faFeatherAlt)
library.add(faDragon)
library.add(faBug)
library.add(faGhost)
library.add(faUserNinja)
library.add(faCircle)
library.add(faHandFist)
library.add(faBrain)
library.add(faMountain)
library.add(faHandRock)
library.add(faMoon)
library.add(faShieldAlt)
library.add(faStar)
library.add(faHillRockslide)

library.add(faX)

library.add(faAngleDown)
library.add(faAngleUp)
library.add(faUserMinus)
library.add(faArrowUpRightFromSquare)

library.add(faArrowDown)
library.add(faTriangleExclamation)

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
