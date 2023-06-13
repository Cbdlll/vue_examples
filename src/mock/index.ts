import { listCourses } from '@/views/example02/data/Exp02'
import axios from '@/axios'
import MockAdapter from 'axios-mock-adapter'
import type { ResultVO } from '@/views/example04/data/data'
import * as consty from '@/datasource/Const'

const mock = new MockAdapter(axios)
// 过滤http前缀请求
mock.onAny(/^http/).passThrough()
mock.onAny(/^\/api\//).passThrough()

interface RouteParams {
  route: string
  reg: RegExp
}

// 地址，支持JS正则表达式
// 正则表达式中 \，由转义符，\/，替代
// 匹配任意字符，\w+；
// $，结束。避免匹配多个
// 整个表达式，置于/  /之间
// 通用的，将{}占位符的字符串路径，转为正则表达式对象
// 例如，/users/:uid; /users/:uid/courses/:hid
function routeToRegExp(p: string): RouteParams {
  const reg =
    p
      .replace(/:\w+\//g, '(\\w+)/')
      .replace(/:\w+/g, '(\\w+)')
      .replace(/\//g, '\\/') + '$'
  return {
    reg: new RegExp(reg),
    route: p
  }
}
// 从regexp中提取出变量名称，从实际路径中提取出数据，动态组装成对象
function urlParams(url: string, routeParams: RouteParams): any {
  const reg = /:(\w+)/g
  const r = routeParams.route.match(reg)
  const match = url.match(routeParams.reg)
  const ob: any = {}
  for (let index = 0; index < r!.length; index++) {
    const propName = r![index].replace(':', '')
    ob[propName] = match![index + 1]
  }
  return ob
}

const resulVO: ResultVO<{}> = {
  code: 200,
  data: {}
}

mock.onPost('login').reply((c) => {
  // 获取请求数据
  // 此时请求的js对象已转为json字符串。因此需要转换回JS对象
  const data = c.data
  console.log(data)

  const { account, password } = JSON.parse(data)
  if (account == 'Wu' && password == '123') {
    resulVO.code = 200
    resulVO.data = { role: '243f45a3ce', user: { name: 'Wu', sex: '男', title: '学生', level: 1 } }
    resulVO.message = ''
    return [
      200,
      resulVO,
      {
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      }
    ]
  }
  resulVO.code = 401
  resulVO.message = '用户名密码错误'
  return [200, resulVO]
})

mock.onGet('getCourses').reply((c) => {
  //判断是否登录
  const auth = c.headers?.token
  if (!auth) {
    resulVO.code = 401
    resulVO.message = '未登录'
    return [200, resulVO]
  }
  if (
    auth ==
    '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
  ) {
    resulVO.code = 200
    resulVO.data = { courses: listCourses() }
    return [200, resulVO]
  }
  resulVO.code = 403
  resulVO.message = '无权限'
  return [200, resulVO]
})
