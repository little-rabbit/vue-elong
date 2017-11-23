
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Car from '@/components/car'
import China from '@/components/china' 
import Denglv from '@/components/denglv'
import Zhuce from '@/components/zhuce' 
import Inter from '@/components/inter'
import Plane from '@/components/plane' 
import Point from '@/components/point'
import Train from '@/components/train' 

Vue.use(Router)
 export default new Router({
  routes:[
    {
      path:'/',
      component:Hello
    },
    {
       path:'/denglv',
       component:Denglv
    },
    {
       path:'/zhuce',
       component:Zhuce
    },
     {
      path:'/plane',
      component:Plane
    },
    {
       path:'/train',
       component:Train
    },
    {
       path:'/car',
       component:Car
    },
    {
       path:'/point',
       component:Point
    },
    {
       path:'/inter',
       component:Inter
    },
    {
       path:'/china',
       component:China
    },
  ]
 })


