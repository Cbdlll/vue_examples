<template>
  <div id="side">
    <SideBarView id="sidebar" />
    <div>
      <RouterView id="router" />
    </div>
  </div>
  <alertdialog v-if="exception.length > 0" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarView from './views/SideBarView.vue'
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from './store'

const alertdialog = defineAsyncComponent(() => import('@/components/AlertDialog.vue'))
const store = useStore()
const exception = computed(() => store.exceptionS)
</script>

<style>
#side {
  display: flex;
}
#sidebar {
  border: 1px solid red;
  width: 300px;
}
#router {
  border: 1px solid red;
  padding: 10px;
}
</style>
