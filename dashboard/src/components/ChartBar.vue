<template>
  <div class="charts-wrapper">
    <select name="years" id="">
        <option value="2019">2019</option>
        <option value="2019">2020</option>
        <option value="2019">2021</option>
        <option value="2019">2022</option>
    </select>

    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref } from "vue";

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "PieChart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({
    title: {
        text: "Vendas do ano de 2020",
        left: "center",
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : R${c}",
    },
    xAxis: {
        type: "category",
        data: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
    },
    yAxis: {
        type: "value",
    },
    series: [
        {
        name: "Total",
        type: "bar",
        showBackground: true,
        backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
        },
        data: [
            { value: 334, name: "jan" },
            { value: 424, name: "fev"},
            { value: 234, name: "mar"}, 
            { value: 54, name: "abr"},
            { value: 44, name: "mai"},
            { value: 224, name: "jun"},
            { value: 231, name: "ago"},
            { value: 233, name: "set"},
            { value: 65, name: "out"},
            { value: 354, name: "nov"},
            { value: 155, name: "dez"}
        ],
        emphasis: {
            itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            },
        },
        },
    ],
    });

    return { option };
  },
};
</script>
<style scoped>
.chart {
  height: 400px;
}
</style>