import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../router/login'
import Manage from '../router/manage'

const routes = [
    ...Login,
    ...Manage,
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router