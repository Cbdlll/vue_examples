<template>
  <div>
    <p style="font-weight: bold">
      <span :style="{ color: currentCreditR >= requiredCredit ? 'green' : 'red' }">
        {{ currentCreditR }}
      </span>
      /{{ requiredCredit }}
    </p>
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
import { listCourses, type Course } from '@/datasource/Exp01'
import { ref, watch } from 'vue'
const Courses = listCourses().sort((a, b) => a.openTime! - b.openTime!)
const requiredCredit = 17.5
const currentCredit = 0
const currentCreditR = ref(currentCredit)
const selectCourses: Course[] = []
const selectCoursesR = ref<Course[]>(selectCourses)
watch(selectCoursesR, () => {
  ;(currentCreditR.value = 0),
    selectCoursesR.value.forEach((c) => {
      currentCreditR.value += c.credit ?? 0
    })
  selectCoursesR.value.sort((a, b) => a.openTime! - b.openTime!)
})
</script>
<style scoped>
div {
  border: 1px solid red;
}
</style>
