<template>
    <h1>Dashboard de demonstração</h1>
    <CardSeller v-on:click="showInfo"/>
</template>

<script>
import CardSeller from '../../components/CardSeller.vue'

export default {
    name: 'DemoBoard',
    components: {
        CardSeller
    },
    data() {
        return {
            seller: {
                cod: "",
                name: "",
                total: "",
            }
        }
    },
    methods: {
        async showInfo() {
            alert("oi")
        }
    }
}
</script>

<style lang="sass" scoped>

</style>