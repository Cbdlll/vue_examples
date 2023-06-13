import type { Course } from '@/views/example02/data/Exp02'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User, ResultVO } from '../data/data'

export const useExp04Store = defineStore('Exp04Store', () => {
  const courseS = ref<Course[]>([])
  const userS = ref<User>({ name: 'Wu', password: '111' })

  const loginA = async (data: { name: string; password: string }) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO<{ user: User }>>('login', data)
      console.log(resp.headers.token)
      sessionStorage.setItem('token', resp.headers.token)
      userS.value = resp.data.data?.user
    } catch (error) {
      // eslint默认禁止空执行体。加一段注释或关闭该检测
    }
  }
  return {
    courseS,
    userS,
    loginA
  }
})
