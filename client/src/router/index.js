import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import UserIndex from '@/components/User/Index'
import CreateUser from '@/components/User/CreateUser'
import EditUser from '@/components/User/EditUser'
import ShowUser from '@/components/User/ShowUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path:'/user/create',
      name: 'user-create',
      component: CreateUser
    },
    {
      path:'/user/edit',
      name: 'user-edit',
      component: EditUser
    },
    {
      path:'/user',
      name: 'user',
      component: ShowUser
    }
  ]
})
