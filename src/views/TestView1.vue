<template>
  <el-calendar v-model="value" />
  <el-row class="mb-4">
    <el-button type="danger" @click="Logout()">Logout</el-button>
    <el-button type="primary" @click="change()">change</el-button>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useExp04Store } from './example04/store/exp04'
import { storeToRefs } from 'pinia'

const value = ref(new Date())

const Logout = () => {
  const store = useExp04Store()
  const user = storeToRefs(store).userS
  user.value.level = 0
}

const change = () => {
  const store = useExp04Store()
  const user = storeToRefs(store).userS
  user.value.level = 2
}
</script>
