<template lang="">
    <CRow style="align-self: center; width: 100%; margin-left: 10%">
    <!-- <CChartPieExample style="height: 400px; width: 400px" /> -->
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Vendedor</th>
                <th scope="col">Vendas</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <th scope="row">{{ sellersData[0].pos }}</th>
                <td>{{ sellersData[0].name }}</td>
                <td>{{ sellersData[0].total }}</td>
            </tr>
            <tr>
                <th scope="row">{{ sellersData[1].pos }}</th>
                <td>{{ sellersData[1].name }}</td>
                <td>{{ sellersData[1].total }}</td>
            </tr>
            <tr>
                <th scope="row">{{ sellersData[2].pos }}</th>
                <td>{{ sellersData[2].name }}</td>
                <td>{{ sellersData[2].total }}</td>
            </tr>
            </tbody>
        </table>
    </CRow>
</template>
<script>
export default {
    name: "SellersTable",
    data() {
        return {
            sellersData: [
                { pos: "1", name: "Mara", total: "R$7.234,00" },
                { pos: "2", name: "José", total: "R$6.874,00" },
                { pos: "3", name: "Pedro", total: "R$4.324,00" },
                { pos: "4", name: "Teste1", total: "R$3.524,00" },
                { pos: "5", name: "Teste2", total: "R$2.724,00" }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>