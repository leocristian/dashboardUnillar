<template>
  <CChartBar :data="allData" />
  <CButton color="primary" class="float-end" v-on:click="updateChart" style="width: 60px; margin: 20px 0 0 10px">
     <CIcon :icon="'cilLoop'" />
  </CButton>
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'
import api from '../../services/api'

export default {
  name: 'CChartBarExample',
  components: { CChartBar },
  data() {
    return {
      dataFormated: {
        labels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho',
                'Agosto','Setembro','Outubro','Novembro','Dezembro'],
        datasets: []
      },
      allData: {
        labels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho',
                'Agosto','Setembro','Outubro','Novembro','Dezembro'],
        datasets:  [
          {
            label: '2020',
            backgroundColor: '#2452BD',
            data: [3, 3, 3, 3, 3, 40, 39, 80, 40, 20, 12, 12]
          },
          {
            label: '2021',
            backgroundColor: '#C41F1F',
            data: [64, 2, 23, 32, 40, 12, 23, 78, 23, 22, 4, 12],
          },
          {
            label: '2022',
            backgroundColor: '#B58910',
            data: [34, 5],
          },
        ],
      }
    }
  },
  mounted() {
    api.get('/getAllData').then((response) => {
      this.allData.datasets = response.data
      console.log(this.allData)
    }).catch((error) => {
      console.log("Erro na requisição: " + error);
    })
  },
  methods: {
    async updateChart() {
      const data =  [3, 3, 3, 3, 3, 40, 39, 80, 40, 20, 12, 12]
      alert(data)
      this.allData.datasets[0].data = data
      console.log(this.allData.datasets[0].data)
    },
    async filterByYear(year) {
      const data =  [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 12]
      return data
    }
  },
  computed: {
    defaultData() {
      return {
        labels: this.months,
        datasets: [
          {
            label: '2020',
            backgroundColor: '#2452BD',
            data: this.data
          },
          {
            label: '2021',
            backgroundColor: '#C41F1F',
            data: [64, 2, 23, 32, 40, 12, 23, 78, 23, 22, 4, 12],
          },
          {
            label: '2022',
            backgroundColor: '#B58910',
            data: [34, 5],
          },
        ],
      }
    },
  },
}
</script>
