<template>
  <div id="side">
    <SideBarView id="sidebar" />
    <div>
      <testView1 v-if="user.level == 1" />
      <testView2 v-else-if="user.level == 2" />
      <RouterView v-else id="router" />
    </div>
  </div>
  <alertdialog v-if="exception.length > 0" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarView from './views/SideBarView.vue'
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from './store'
import { storeToRefs } from 'pinia'
import { useExp04Store } from './views/example04/store/exp04'

const alertdialog = defineAsyncComponent(() => import('@/components/AlertDialog.vue'))
const testView1 = defineAsyncComponent(() => import(`@/views/TestView1.vue`))
const testView2 = defineAsyncComponent(() => import(`@/views/TestView2.vue`))

const store = useStore()
const exception = computed(() => store.exceptionS)

const store1 = useExp04Store()
const user = storeToRefs(store1).userS
</script>

<style>
#side {
  display: flex;
}
#sidebar {
  border: 1px solid red;
}
#router {
  border: 1px solid red;
  padding: 10px;
  width: 300px;
}
</style>
