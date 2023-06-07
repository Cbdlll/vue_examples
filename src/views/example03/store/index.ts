import { defineStore } from 'pinia'
import { getShop, listShops, type Order, type Shop } from '../data/data'
import { ref } from 'vue'

export const useExp03Store = defineStore('Exp03Store', () => {
  const shopListS = ref<Shop[]>([])
  const shopCacheS = ref<Shop[]>([])
  const ordersS = ref<Order[]>([])
  const listShopsA = () => {
    if (shopListS.value.length == 0) {
      shopListS.value = listShops()
    }
  }
  const getShopA = async (sid: number) => {
    setTimeout(() => {
      const shop = getShop(sid)
      shop && shopCacheS.value.push(shop)
    }, 1000)
  }

  return {
    shopListS,
    listShopsA,
    shopCacheS,
    getShopA,
    ordersS
  }
})
