<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 shadow-md bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-md">
      <h2 class="text-lg font-semibold mb-4">Edit Expense</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Expense Title
          </label>
          <input
            v-model="formData.expenseTitle"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            v-model.number="formData.amount"
            type="number"
            step="0.01"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            v-model="formData.date"
            type="date"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            v-model="formData.category"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2"
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

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Notes (Optional)
          </label>
          <textarea
            v-model="formData.notes"
            rows="3"
            class="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2"
          ></textarea>
        </div>

        <div class="flex justify-end gap-3">
          <button
            type="button"
            @click="$emit('close')"
            class="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  expense: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["close", "save"]);

const formData = ref({
  expenseTitle: "",
  amount: 0,
  date: "",
  category: "",
  notes: "",
  id: null,
});

watch(
  () => props.expense,
  (newExpense) => {
    if (newExpense && Object.keys(newExpense).length > 0) {
      formData.value = {
        expenseTitle: newExpense.expenseTitle || "",
        amount: newExpense.amount || 0,
        date: newExpense.date || "",
        category: newExpense.category || "",
        notes: newExpense.Notes || "",
        id: newExpense.id || null,
      };
    }
  },
  { immediate: true }
);

const handleSubmit = () => {
  emit("save", { ...formData.value });
  emit("close");
};
</script>
