<template>
    <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
        :alt="photo.id"
    />
</template>

<script>
import { computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const route = useRoute();

        // updates the state every time the URL changes
        watchEffect(() => {
            const id = route.params.id;
            if (!id) {
                return;
            }
            store.dispatch('photos/getByAlbum', { albumId: id });
        })

        const photos = computed(() => {
            return store.state.photos.all;
        });

        return {
            photos,
        }
    },
    
}
</script>

<style>

</style>
