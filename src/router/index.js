import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'Hello',
            component: () =>import('../views/User.vue')
        },
        {
            path: '/users',
            name:'Usuarios',
            component:() => import('../views/User.vue')
        },
        {
            path:'/users/:id',
            name: 'Usuario',
            component:() => import('../views/UserId.vue')
        }
    ]
})