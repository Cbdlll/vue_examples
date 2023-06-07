export interface Course {
  id?: number
  name?: string
  credit?: number
  openTime?: number
}

export function listCourses() {
  const Courses: Course[] = [
    { name: '移动终端设计', openTime: 6, credit: 2.5 },
    { name: 'Web前端开发技术', openTime: 4, credit: 2.0 },
    { name: 'XML与WebService技术', openTime: 5, credit: 2.0 },
    { name: '算法设计', openTime: 5, credit: 2.0 },
    { name: '服务科学与SOA', openTime: 6, credit: 2.0 },
    { name: '企业资源计划', openTime: 6, credit: 2.0 },
    { name: 'Java程序设计', openTime: 4, credit: 2.5 },
    { name: 'Web系统框架', openTime: 6, credit: 2.5 },
    { name: '大数据开发基础', openTime: 6, credit: 2.5 },
    { name: 'Python应用', openTime: 6, credit: 2.5 },
    { name: 'Web开发技术', openTime: 5, credit: 2.5 }
  ]
  return Courses
}
