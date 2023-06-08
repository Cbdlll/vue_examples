<template>
  <div v-for="(order, index) of orders" :key="index">
    {{ order.item.name }}/{{ order.quantity }}
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useExp03Store } from './store'

const store = useExp03Store()
const orders = storeToRefs(store).ordersS
</script>
