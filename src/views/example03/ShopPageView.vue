<template>
  <div>shop{{ id }}</div>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
interface Props {
  sid: number
}
const props = defineProps<Props>()
const propsR = toRef(props)
const id = propsR.value.sid
</script>
