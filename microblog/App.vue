<template>
    <card
        v-for="post in filteredPosts"
        :key="post.id"
    >
      <template v-slot:title>
        {{ post.title }}
      </template>

      <template v-slot:content>
        {{ post.content }}
      </template>

      <template v-slot:description>
        <controls
            :post="post"
            @setHashtag="setHashtag"
        />
      </template>
    </card>
    {{ currentTag }}
</template>

<script>
import { ref, computed } from 'vue';
import Card from './Card.vue';
import Controls from './Controls.vue';
import { store } from './store';

export default {
    emits: ['setHashtag'],
    components: {
        Card,
        Controls,
    },
    setup() {
        const currentTag = ref();
        const setHashtag = (hashtag) => {
            currentTag.value = hashtag;
        }

        const filteredPosts = computed(() => {
            if (!currentTag.value) {
                return store.state.posts;
            }

            return store.state.posts.filter(post => {
                return post.hashtags.includes(currentTag.value)
            })
        })

        return {
            filteredPosts,
            currentTag,
            setHashtag,
        }
    }
}
</script>

<style scoped>

</style>
