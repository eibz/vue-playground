export const photos = {
    namespaced: true,

    state() {
        return {
            all: [],
        }
    },

    mutations: {
        setPhotosForCurrentAlbum(state, photos) {
            state.all = photos;
        }
    },

    actions: {
        async getByAlbum(ctx, { albumId }) {
            const res = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
            const json = await res.json();
            ctx.commit('setPhotosForCurrentAlbum', json);
        }
    },
}
