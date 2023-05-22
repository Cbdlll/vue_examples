export interface Course {
  id?: number
  name?: string
  credit?: number
  openTime?: number
}

export const Courses: Course[] = [
  { id: 1, name: 'web前端开发技术', credit: 2, openTime: 4 },
  { id: 2, name: 'Java程序设计', credit: 2.5, openTime: 4 },
  { id: 3, name: 'XML与WebService技术', credit: 2, openTime: 5 },
  { id: 4, name: '算法设计', credit: 2, openTime: 5 },
  { id: 5, name: 'web开发技术', credit: 2.5, openTime: 5 },
  { id: 6, name: '移动终端设计', credit: 2.5, openTime: 6 },
  { id: 7, name: '服务科学与SOA', credit: 2, openTime: 6 },
  { id: 8, name: '企业资源计划', credit: 2, openTime: 6 },
  { id: 9, name: 'Web系统框架', credit: 2.5, openTime: 6 },
  { id: 10, name: '大数据开发基础', credit: 2.5, openTime: 6 },
  { id: 11, name: 'Python应用', credit: 2.5, openTime: 6 }
]
