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
    },
    {
      props: true,
      path: '/example03',
      component: () => import('@/views/example03/HomePageView.vue'),
      children: [
        {
          props: true,
          path: 'location',
          component: () => import('@/views/example03/LocationPageView.vue')
        },
        {
          props: true,
          name: 'foods',
          path: 'foods',
          component: () => import('@/views/example03/FoodPageView.vue')
        },
        {
          props: true,
          path: 'shops/:sid',
          component: () => import('@/views/example03/ShopPageView.vue')
        }
        // {
        //   props: true,
        //   path: 'orders',
        //   component: () => import('@/views/example03/OrderPageView.vue')
        // }
      ]
    }
  ]
})

export default router
