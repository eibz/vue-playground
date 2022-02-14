<template>
    {{ store.state.count }}
    <button @click="click">Increment</button>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        console.log(store);

        const click = () => {
            store.commit('increment', 10)
        }

        return {
            store,
            click,
        }
    }
}
</script>

<style scoped>

</style>
