<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarView from './views/SideBarView.vue'
</script>

<template>
  <SideBarView id="sidebar" />
  <RouterView id="router" />
</template>

<style>
#app {
  display: flex;
}
#sidebar {
  border: 1px solid red;
  width: 300px;
}
#router {
  border: 1px solid red;
  flex: 1;
}
</style>
