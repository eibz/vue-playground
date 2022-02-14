import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            count: 0
        }
    },

    mutations: {
        increment(state, payload) {
            state.count += payload;
        } 
    }
})
