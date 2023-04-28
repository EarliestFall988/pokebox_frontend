import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginVue.vue'),
      meta: {}
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: () => import('../views/ForgotPasswordView.vue'),
      meta: {}
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue'),
      meta: {}
      },
    {
        path: '/AddPokemonOwned',
        name: 'AddPokemonOwned',
        component: () => import('../views/AddPokemonOwnedView.vue'),
        meta: {}
      },
      {
          path: '/AddItemOwned',
          name: 'AddItemOwned',
          component: () => import('../views/AddItemOwnedView.vue'),
          meta: {}
      },
      {
          path: '/AddItem',
          name: 'AddItem',
          component: () => import('../views/AddNewItemView.vue'),
          meta: {}
      },
    // {
    //   path: '/pokemon',
    //   name: 'pokemon',
    //   component: () => import('../views/PokemonView.vue'),
    //   meta: { transition: 'slide'}
    // },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue'),
      meta: { transition: 'slide' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/items',
      name: 'items',
      component: () => import('../views/ItemsView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/SetupView.vue')
    },
    {
      path: '/:catchAll(.*)',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
