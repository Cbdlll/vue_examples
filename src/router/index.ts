import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/example02',
      component: () => import('@/views/example02/Example02View.vue')
    },
    {
      path: '/class_examples',
      component: () => import('@/views/class_examples/exampleView.vue')
    }
  ]
})

export default router
