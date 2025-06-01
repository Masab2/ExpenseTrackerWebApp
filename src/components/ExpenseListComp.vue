<template>
  <div class="w-full mx-auto p-4">
    <ul class="space-y-2">
      <li
        v-for="(expense, index) in props.expenses"
        :key="index"
        class="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
      >
        <div>
          <p class="font-medium">{{ expense.expenseTitle }}</p>
          <p class="text-sm text-gray-600">${{ expense.amount.toFixed(2) }} - {{ expense.date }}</p>
        </div>
        <div class="flex gap-2">
          <button 
            @click="$emit('edit', index)"
            class="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm"
          >
            Edit
          </button>
          <button 
            @click="$emit('delete', index)"
            class="px-3 py-1 text-red-600 hover:bg-red-50 rounded text-sm"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>

    <p v-if="props.expenses.length === 0" class="text-center text-gray-500 mt-6">
      No expenses to show.
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  expenses: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['edit', 'delete']);
</script>