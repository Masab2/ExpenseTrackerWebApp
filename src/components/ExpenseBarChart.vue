<template>
  <div class="space-y-4">
    <div class="text-xl font-semibold text-gray-800">
      📈 Your Expense Graphs
    </div>
    <canvas ref="lineChartRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
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
  Filler,
} from "chart.js";

interface Expense {
  amount: number;
  date: string;
}

const props = defineProps<{
  expenses: Expense[];
}>();

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const lineChartRef = ref<HTMLCanvasElement | null>(null);

function aggregateExpensesByMonth(expenses: Expense[]) {
  const monthlyTotals: number[] = Array(12).fill(0);
  expenses.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    monthlyTotals[month] += expense.amount;
  });

  return monthlyTotals;
}

watch(
  () => props.expenses,
  () => {
    if (!lineChartRef.value) return;
    const monthlyData = aggregateExpensesByMonth(props.expenses);
    new Chart(lineChartRef.value, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Monthly Expenses",
            data: monthlyData,
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            pointBackgroundColor: "rgb(75, 192, 192)",
            tension: 0.4,
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
  },
  { immediate: true }
);
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
