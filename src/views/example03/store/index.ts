import { defineStore } from 'pinia'
import { getShop, listShops, type Order, type Shop } from '../data/Exp03'
import { ref } from 'vue'

// export const useExp03Store = defineStore('Exp03Store', () => {
//   const shopListS = ref<Shop[]>([])
//   const shopCacheS = ref<Shop[]>([])
//   const ordersS = ref<Order[]>([])
//   const listShopsA = async () => {
//     setTimeout(() => {
//       if (shopListS.value.length == 0) {
//         shopListS.value = listShops()
//       }
//     }, 1000)
//   }
//   const getShopA = async (sid: number) => {
//     setTimeout(() => {
//       const shop = getShop(sid)
//       shop && shopCacheS.value.push(shop)
//     }, 1000)
//   }

//   return {
//     shopListS,
//     listShopsA,
//     shopCacheS,
//     getShopA,
//     ordersS
//   }
// })

export const useExp03Store = defineStore(`Exp03Store`, () => {
  const ordersS = ref<Order[]>([])
  const shopListS = ref<Shop[]>([])
  const shopCacheS = ref<Shop[]>([])

  const listShopsA = async () => {
    setTimeout(() => {
      if (shopListS.value.length == 0) shopListS.value = listShops()
    }, 1000)
  }

  const getShopA = async (sid: number) => {
    setTimeout(() => {
      const shop = getShop(sid)
      shop && shopCacheS.value.push(shop)
    }, 1000)
  }
  return {
    ordersS,
    shopListS,
    listShopsA,
    shopCacheS,
    getShopA
  }
})
