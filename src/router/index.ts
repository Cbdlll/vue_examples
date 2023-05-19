import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/example01',
      component: () => import('@/views/example01/Example01View.vue')
    },
    {
      path: '/class_example01',
      component: () => import('@/views/class_examples/example01View.vue')
    }
  ]
})

export default router
