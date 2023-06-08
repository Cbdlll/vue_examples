<template>
  <div>
    <div>
      <!-- <RouterLink to="/example03/foods" style="text-decoration: none">美食</RouterLink>
      | -->
      <RouterLink :to="{ name: 'foods' }" style="text-decoration: none">美食</RouterLink>
      |
      <RouterLink to="/example03/location" style="text-decoration: none">本地</RouterLink>
      |
      <a href="" @click.prevent style="text-decoration: none">跑腿</a>
    </div>
    <p>
      <router-link to="/example03/orders" style="text-decoration: none" class="order">
        订单：{{ cost.toFixed(2) }}
      </router-link>
    </p>
    <RouterView style="padding: 5px"></RouterView>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import { useExp03Store } from './store'
import { storeToRefs } from 'pinia'
const cost = ref(0)
const store = useExp03Store()
//const orders = store.ordersS
const orders = storeToRefs(store).ordersS
console.log(orders)

watch(orders.value, () => {
  cost.value = 0
  orders.value.forEach((o) => {
    cost.value += o.quantity * o.item.price!
  }),
    { deep: true }
})
</script>
<style scoped>
.order {
  display: inline-black;
  background: sandybrown;
  border-radius: 5px;
}
</style>
