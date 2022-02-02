<template>
    <button
        v-bind:style="{ background, color }"
        v-bind:disabled="disabled"
    >Button</button>
</template>

<script>
export default {
    props: {
        background: {
            type: String
        },
        color: {
            type: String
        },
        disabled: {
            type: Boolean
        },
    }
}
</script>

<style scoped>

</style>
