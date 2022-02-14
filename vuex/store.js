import { createStore } from 'vuex';
import { testPosts } from './testposts';

// to emulate an API (1000ms async delay)
const delay = () => new Promise(res => setTimeout(res, 1000));

export const store = createStore({
    state() {
        return {
            postId: null,
            posts: [],
        }
    },

    mutations: {
        setPostId(state, postId) {
            state.postId = postId;
        },

        setPosts(state, posts) {
            state.posts = posts;
        },
    },

    actions: {
        async fetchPosts(ctx) {
            await delay();
            ctx.commit('setPosts', testPosts);
        }
    }
})
