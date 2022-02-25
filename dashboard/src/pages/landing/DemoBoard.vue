<template>
    <div class="demo">
        <h1>Hanking de vendedores</h1>
        <div class="podium">
            <div class="list" v-for="(seller, index) in sellers" v-bind:key="index">
                <CardSeller :sellerName="seller.name" :totalValue="seller.total"/>
            </div>
        </div>
        <BarChart class="bar" />
        <MainButton class="btnPie" :msg="'Atualizar gráfico'" :click="updateChart"/>
        <!-- <BarVerticalChart /> -->
        <div class="select-container">
            <div class="selectdiv">
                <label>
                    <select v-model="yearSelected">
                        <option selected > Selecione o ano </option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </label>
            </div>
        </div>
    </div>
</template>

<script>

import CardSeller from '../../components/CardSeller.vue'
import MainButton from '../../components/button/MainButton.vue'
import BarChart from '../../components/charts/BarChart.vue'
// import BarVerticalChart from '../../components/charts/BarVerticalChart.vue'
// import PieChart from '../../components/charts/PieChart.vue'

export default {
    name: 'DemoBoard',
    components: {
        CardSeller,
        MainButton,
        BarChart,
        // BarVerticalChart
        // PieChart
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
            ],
            yearSelected: 'Selecione o ano'
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
.btnPie {
    margin-left: 47%;
}
.selection-card {
    margin-left: 8%;
    margin-top: -15px;
}
.charts-container {
    display: flex;
}
.pie {
    margin-left: 50%;
}


</style>