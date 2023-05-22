<template>
  <div>
    <h3>{{ currentCreditR }}/17.5</h3>
    <template v-for="(c, index) of Courses" :key="index">
      <label>
        <input type="checkbox" v-model="selectCoursesR" :value="c" />
        {{ c.name }} - {{ c.credit }} ({{ c.openTime }})
      </label>
      <br />
    </template>
  </div>
  <div>
    <span v-for="(c, index) of selectCoursesR" :key="index">
      {{ c.name }} - {{ c.credit }} ({{ c.openTime }})
      <br />
    </span>
  </div>
</template>
<script lang="ts" setup>
import { Courses, type Course } from '@/datasource/Exp01'
import { ref, watch } from 'vue'
const currentCredit = 0 
const currentCreditR = ref(currentCredit)
const selectCourses: Course[] = []
const selectCoursesR = ref<Course[]>(selectCourses)
watch([selectCoursesR], () => {
  ;(currentCreditR.value = 0),
    selectCoursesR.value.forEach((c) => {
      currentCreditR.value += c.credit ?? 0
    })
})
</script>
<style scoped>
div {
  border: 1px solid red;
}
</style>
