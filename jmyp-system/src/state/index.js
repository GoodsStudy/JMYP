import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        active: '/manage',
        token: ''
    },
    mutations: {
        active(state, str) {
            state.active = str
        },
        loginSuccess(state, str) {
            state.token = str
        }
    },
    actions: {
    }
})

export default store