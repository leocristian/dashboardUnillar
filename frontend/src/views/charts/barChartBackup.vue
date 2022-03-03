<template>
  <BarChart :chart-data="data" :options="options" css-classes="chart-container" />
</template>

<script>

import { BarChart } from 'vue-chart-3'

export default {
  name: "BarChart",
  components: { BarChart },
  data() {
    return {
      dataValues: ref([
        [3, 3, 3, 3, 3, 40, 39, 80, 40, 20, 12, 12],
        [64, 2, 23, 32, 40, 12, 23, 78, 23, 22, 4, 12]
      ]),
      data: {
        labels:  ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho', 'Agosto','Setembro','Outubro','Novembro','Dezembro'],
        datasets: [
          {
            label: '2020',
            backgroundColor: '#2452BD',
            data: this.dataValues.value[0]
          },
          {
            label: '2021',
            backgroundColor: '#C41F1F',
            data: this.dataValues.value[1]
          }
        ],
      },
      options: {
        plugins: {
            title: {
              text: "Bar"
            }
          }
      }
    }
  }
}
</script>

<style scoped>

</style>