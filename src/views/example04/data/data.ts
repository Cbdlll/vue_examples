export interface User {
  name: string
  password: string
}

export interface ResultVO<T> {
  code: number
  message?: string
  data: T
}
