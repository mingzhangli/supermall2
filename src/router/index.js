//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
const Car = ()=> import ('../views/car/Car')
const Mine = ()=> import ('../views/mine/Mine')
const HomePage = ()=> import ('../views/homepage/HomePage')
const ClassIfication = ()=> import ('../views/classIfication/ClassIfication')
const Detail = () => import ('../views/detail/Detail')

Vue.use(VueRouter)
//创造一个VueRouter实例对象
//配置映射关系
const routes = [{
  path:'',
  redirect:'/Home',
  component:HomePage
  
},
{
  path:'/Home',
  component:HomePage
  },{
  path:'/Car',
  component:Car
},{
  path:'/Mine',
  component:Mine
},{
  path:'/ClassIfication',
  component:ClassIfication
},{
  path:'/Detail/:iid',
  component:Detail
}
]
//将router对象传入main.js里的Vue实例
const router=new VueRouter({
  routes,
  mode:'history'
})
export default router