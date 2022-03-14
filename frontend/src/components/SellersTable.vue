<template lang="">
    <CRow style="align-self: center; width: 100%; margin-left: 10%">
    <!-- <CChartPieExample style="height: 400px; width: 400px" /> -->
        <CTable class="table table-hover">
            <CTableHead>
            <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell >
                <CTableHeaderCell scope="col">Vendedor</CTableHeaderCell >
                <CTableHeaderCell scope="col">Vendas</CTableHeaderCell >
            </CTableRow>
            </CTableHead>
            <tbody>
            <CTableRow v-for="(item, index) in sellersData" v-bind:key="index">
                <CTableHeaderCell scope="row">{{ index }}</CTableHeaderCell>
                <CTableDataCell>{{ item.vendedor }}</CTableDataCell>
                <CTableDataCell>R$ {{ item.vendas }}</CTableDataCell>
            </CTableRow>
            </tbody>
        </CTable>
    </CRow>
</template>

<script>

import api from '../services/api'

export default {
    name: "SellersTable",
    data() {
        return {
            sellersData: []
        }
    },
    mounted() {
        api.get('/getSellersInfo').then((response) => {
            console.log(response.data)
            this.sellersData = response.data
        }).catch((error) => {
            console.log("Erro na requisição (getAllData): " + error)
        })
    }
}
</script>
<style lang="">
    
</style>