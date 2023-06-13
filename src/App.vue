<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarView from './views/SideBarView.vue'
</script>

<template>
  <div id="side">
    <SideBarView id="sidebar" />
    <div>
      <RouterView id="router" />
    </div>
  </div>
</template>

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
