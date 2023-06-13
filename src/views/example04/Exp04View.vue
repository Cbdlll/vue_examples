<template>
  <div>
    <h2>Login</h2>
    <div>
      <p>Wu/123</p>
      <span>Name:&ensp;&ensp;&ensp;</span>
      <input type="text" v-model="tempUser.account" />
      <br />
      <span>Password:</span>
      <input type="password" v-model="tempUser.password" />
      <br />
      <button @click="login">Login</button>
      <p>{{ userC }}</p>
      <h2>查看课程</h2>
      <button @click="getCourses">getCourses</button>
      <ul>
        <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useExp04Store } from './store/exp04'

interface User {
  account: string
  password: string
}

const store = useExp04Store()
const tempUser = ref<User>({ account: '', password: '' })
const userC = computed(() => store.userS)
const courses = computed(() => store.coursesS)
const login = () => {
  const user: User = {
    account: tempUser.value.account,
    password: tempUser.value.password
  }
  console.log(user)
  store.loginA(user)
  //点击提交按钮之后，清空输入框
  tempUser.value.account = ''
  tempUser.value.password = ''
}

const getCourses = () => {
  store.getCoursesA()
}
</script>
