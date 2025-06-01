<template>
  <div class="p-6">
    <ExpenseBarChart :expenses="expenses"  />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ExpenseBarChart from "../components/ExpenseBarChart.vue";
import axios from "axios";

const expenses = ref([]);

onMounted(async () => {
  await getExpenses();
});

async function getExpenses() {
  try {
    const userId = localStorage.getItem("userId");
    const response = await axios.get("http://localhost:3000/api/expense/get", {
      params: {
        userId: userId,
      },
    });
    expenses.value = response.data.expenses;
  } catch (error) {
    console.error("Error fetching expenses:", error);
  }
}
</script>
