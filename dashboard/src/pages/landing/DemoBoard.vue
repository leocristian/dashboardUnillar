<template>
    <div class="demo">
        <h1>Dashboard de demonstração</h1>
        <div class="podium">
            <div class="list" v-for="(seller, index) in sellers" v-bind:key="index">
            <CardSeller :sellerName="seller.name" :totalValue="seller.total" v-on:click="showInfo"/>
            <!-- <CardSeller :sellerName="'João'" :totalValue="'1.293'" v-on:click="showInfo"/>
            <CardSeller :sellerName="'Pedro'" :totalValue="'850'" v-on:click="showInfo"/> -->
            </div>
        </div>
        <YearSelection />
        <MainButton class="geral" :msg="'Venda geral do ano'" />
    </div>
</template>

<script>

import CardSeller from '../../components/CardSeller.vue'
import MainButton from '../../components/button/MainButton.vue'
import YearSelection from '../../components/YearSelection.vue'

export default {
    name: 'DemoBoard',
    components: {
        CardSeller,
        MainButton,
        YearSelection
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
        async showInfo() {
            alert("oi")
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
.geral {
    margin-top: 500px;
    margin-left: 450px;
}

</style>