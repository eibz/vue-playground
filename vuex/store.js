import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            postId: null,
        }
    },

    mutations: {
        setPostId(state, postId) {
            state.postId = postId;
        } 
    }
})
