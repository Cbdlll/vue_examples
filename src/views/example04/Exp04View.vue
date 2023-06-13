<template>
  <div>
    <h2>Login</h2>
    <div>
      <p>Wu/123</p>
      <span>Name:&ensp;&ensp;&ensp;</span>
      <input type="text" v-model="tempUser.name" />
      <br />
      <span>Password:</span>
      <input type="password" v-model="tempUser.password" />
      <br />
      <button @click="login">Submit</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useExp04Store } from './store/exp04'

interface User {
  name: string
  password: string
}

const store = useExp04Store()
const tempUser = ref<User>({ name: '', password: '' })

const login = () => {
  const user: User = {
    name: tempUser.value.name,
    password: tempUser.value.password
  }
  store.loginA(user)
}
</script>
