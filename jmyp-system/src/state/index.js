import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        active: '/manage'
    },
    mutations: {
        active(state, str) {
            state.active = str
        }
    },
    actions: {
    }
})

export default store