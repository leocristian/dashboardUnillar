<template>
    <div class="demo">
        <h1>Hanking de vendedores</h1>
        <div class="podium">
            <div class="list" v-for="(seller, index) in sellers" v-bind:key="index">
            <CardSeller :sellerName="seller.name" :totalValue="seller.total" v-on:click="showInfo(seller)"/>
            </div>
        </div>
    <ChartBar />
    </div>
</template>

<script>

import CardSeller from '../../components/CardSeller.vue'
//import MainButton from '../../components/button/MainButton.vue'
//import YearSelection from '../../components/YearSelection.vue'
import ChartBar from '../../components/ChartBar.vue'

export default {
    name: 'DemoBoard',
    components: {
        CardSeller,
        //MainButton,
        //YearSelection,
        ChartBar
    },
    data() {
        return {
            sellers: [
                {
                    name: "leonardo",
                    total: "1234",
                }, {
                    name: "cristian",
                    total: "4324",
                }, {
                    name: "amorim",
                    total: "4324",
                }
            ]
        }
    },
    methods: {
        async showInfo(seller) {
            alert(`Vendedor ${seller.name} selecionado`)
        }
    }
}
</script>

<style lang="css" scoped>

.podium {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}


</style>