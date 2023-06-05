import { defineStore } from 'pinia'
import { listShops, type Shop } from '../data/data'
import { ref } from 'vue'

export const useExp03Store = defineStore('Exp03Store', () => {
    const shopListS = ref<Shop[]>([])
    const listShopsA = async () => {
      if(shopListS.value.length == 0) {
        shopListS.value = listShops()
      }
    }
    return {
      shopListS,
      listShopsA
    }
  })







// export const useH2Store = defineStore('h2', () => {
//   const shopListS = ref<Shop[]>([])
//   const shopCacheS = ref<Shop[]>([])
//   const ordersS = ref<Order[]>([])
//   const listShopsA = async () => {
//     if (shopListS.value.length == 0) {
//       setTimeout(() => {
//         shopListS.value = listShops()
//       }, 1000)
//     }
//   }
//   const getShopA = async (sid: number) => {
//     // 异步加载数据，并更新state中数据
//     setTimeout(() => {
//       // &&短路特性。如果shop为空直接结束，不为空执行右表达式
//       const shop = getShop(sid)
//       shop && shopCacheS.value.push(shop)
//     }, 1000)
//   }

//   return {
//     shopListS,
//     shopCacheS,
//     ordersS,
//     listShopsA,
//     getShopA
//   }
// })
