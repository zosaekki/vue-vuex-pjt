<template>
    <p>Count2: {{ count }}</p>
    <button type="button" @click="increment">증가</button>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },

    },
    methods: {
        increment() {
            this.$store.commit('increment');
        }
    }
}
</script>

<style>
</style>