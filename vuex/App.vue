<template>
    <button
        v-for="post in posts"
        :key="post.id"
        @click="click(post)"
    >
        {{ post.title }}
    </button>
    <div v-if="currentPost">
        <h2> {{ currentPost.title }} </h2>
        <h4> {{ currentPost.content }} </h4>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
    setup() {
        const store = useStore();

        const click = (post) => {
            store.commit('setPostId', post.id)
        }

        const fetchData = () => {
            store.dispatch('fetchPosts');
        }

        onMounted(() => {
            fetchData();
        })

        return {
            posts: computed(() => store.state.posts),
            postId: computed(() => store.state.postId),
            currentPost: computed(() => store.getters.currentPost),
            click,
        }
    }
}
</script>

<style scoped>

</style>
