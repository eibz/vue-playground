<template>
    <button
        v-for="post in posts"
        :key="post.id"
        @click="click(post)"
    >
        {{ post.title }}
    </button>
    {{ postId }}
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    setup() {
        const posts = [
            { id: 1, title: 'Post #1' },
            { id: 2, title: 'Post #2' }
        ]

        const store = useStore();

        const click = (post) => {
            store.commit('setPostId', post.id)
        }

        return {
            posts,
            postId: computed(() => store.state.postId),
            click,
        }
    }
}
</script>

<style scoped>

</style>
