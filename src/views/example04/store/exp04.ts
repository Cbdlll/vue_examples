import type { Course, User, ResultVO } from '@/views/example04/data/data'
import axios from '@/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExp04Store = defineStore('Exp04Store', () => {
  const coursesS = ref<Course[]>([])
  const userS = ref<User>({})
  const getCoursesA = async () => {
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>('getCourses')
    coursesS.value = resp.data.data?.courses
  }

  const loginA = async (data: { account: string; password: string }) => {
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
    coursesS,
    userS,
    loginA,
    getCoursesA
  }
})
