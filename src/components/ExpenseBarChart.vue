<template>
  <div class="space-y-4">
    <div class="text-xl font-semibold text-gray-800">
      📈 Your Expense Graphs
    </div>
    <canvas ref="lineChartRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const lineChartRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!lineChartRef.value) return;

  new Chart(lineChartRef.value, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Expenses",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly Expenses Overview",
          font: {
            size: 18,
          },
        },
      },
    },
  });
});

</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
