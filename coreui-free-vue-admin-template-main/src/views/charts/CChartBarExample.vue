<template>
  <CChartBar :data="defaultData" />
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'
export default {
  name: 'CChartBarExample',
  components: { CChartBar },
  computed: {
    defaultData() {
      return {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: '2020',
            backgroundColor: '#2452BD',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 12],
          },
          {
            label: '2021',
            backgroundColor: '#C41F1F',
            data: [64, 2, 23, 32, 40, 12, 23, 78, 23, 22, 4, 12],
          },
          {
            label: '2022',
            backgroundColor: '#B58910',
            data: [34, 5, 4, 3, 6, 45, 2, 34, 56, 65, 2, 43, 54],
          },
        ],
      }
    },
  },
}
</script>
