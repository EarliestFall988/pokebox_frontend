import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'

import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faHandFist } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faMountain } from '@fortawesome/free-solid-svg-icons'
import { faHandRock } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHillRockslide } from '@fortawesome/free-solid-svg-icons'

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


import App from './App.vue'
import router from './router'


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
