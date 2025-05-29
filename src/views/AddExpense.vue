<template>
  <div class="mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-md font-semibold text-gray-800 mb-6">➕ Add New Expense</h2>

    <form @submit.prevent="submitExpense" class="space-y-5">
      <!-- Expense Title -->
      <div>
        <label for="title" class="block text-gray-700 font-medium mb-1">Expense Title</label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          placeholder="Enter expense title"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div class="flex gap-4">
        <div class="flex-1">
          <label for="amount" class="block text-gray-700 font-medium mb-1">Amount ($)</label>
          <input
            id="amount"
            v-model.number="form.amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 50.00"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div class="flex-1">
          <label for="date" class="block text-gray-700 font-medium mb-1">Date</label>
          <input
            id="date"
            v-model="form.date"
            type="date"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <!-- Category -->
      <div>
        <label for="category" class="block text-gray-700 font-medium mb-1">Category</label>
        <select
          id="category"
          v-model="form.category"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="" disabled>Select category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Utilities</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Others</option>
        </select>
      </div>

      <!-- Notes -->
      <div>
        <label for="notes" class="block text-gray-700 font-medium mb-1">Notes (Optional)</label>
        <textarea
          id="notes"
          v-model="form.notes"
          rows="3"
          placeholder="Add any notes or details"
          class="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
      >
        Add Expense
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  title: "",
  amount: null as number | null,
  date: "",
  category: "",
  notes: "",
});

function submitExpense() {
  console.log("Submitting expense:", { ...form });
  form.title = "";
  form.amount = null;
  form.date = "";
  form.category = "";
  form.notes = "";
}
</script>
