<template>
  <div>
    <h1>Chart.js</h1>
    <p>
      参考URL：<a href="https://youtu.be/aw8d2f3xfPA" target="_blank"
        >Youtube</a
      >
    </p>
    <p>
      参考URL：<a
        href="https://vue-chartjs.org/guide/#integration"
        target="_blank"
        >公式</a
      >
    </p>
    <p>1.「npm i vue-chartjs chart.js」</p>
    <div>
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "jun"],
        datasets: [
          {
            label: "test1",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 2,
            backgroundColor: "red",
            borderColor: "blue",
          },
          {
            label: "test2",
            data: [1, 2, 3, 4],
            borderWidth: 2,
            backgroundColor: "gold",
            borderColor: "silver",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Chart.js Radar Chart",
            color: "red",
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    }
  },
}
</script>
