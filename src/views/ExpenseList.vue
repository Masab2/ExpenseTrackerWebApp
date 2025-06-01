<template>
  <div class="p-6">
    <HeaderComp msg="Expenses" />
    <p class="text-2xl font-semibold text-gray-800 mt-4">
      Total Expense: ${{ totalExpense }}
    </p>
  </div>
  <div
    class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6 ml-5"
  >
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search expenses..."
      class="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <ExpenseListComp
    :expenses="fileteredExpenses"
    @edit="handleEdit"
    @delete="handleDelete"
  />

  <EditExpenseModal
    :isOpen="showEditModal"
    :expense="selectedExpense"
    @close="closeEditModal"
    @save="updateExpense"
  />
</template>

<script setup>
import HeaderComp from "../components/HeaderComp.vue";
import ExpenseListComp from "../components/ExpenseListComp.vue";
import EditExpenseModal from "../Modals/EditExpenseModal.vue";
import axios from "axios";
import { useToast } from "vue-toastification";

import { ref, onMounted, computed } from "vue";

const toast = useToast();
const expenses = ref([]);
const showEditModal = ref(false);
const selectedExpense = ref({});
const selectedIndex = ref(-1);
const totalExpense = ref(0);
const searchQuery = ref("");

onMounted(async () => {
  getExpenses();
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
    calculateTotalExpense();
  } catch (error) {
    console.error("Error fetching expenses:", error);
  }
}

function calculateTotalExpense() {
  totalExpense.value = expenses.value.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);
}

const handleEdit = (index) => {
  selectedIndex.value = index;
  console.log("Editing expense at index:", index);
  selectedExpense.value = { ...expenses.value[index] };
  console.log("Selected expense:", selectedExpense.value);
  showEditModal.value = true;
};

const handleDelete = async (index) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/expense/delete`,
      {
        params: {
          id: expenses.value[index].id,
        },
      }
    );
    if (response.status === 200) {
      getExpenses();
      toast.success(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

const closeEditModal = () => {
  showEditModal.value = false;
  selectedExpense.value = {};
  selectedIndex.value = -1;
};

const updateExpense = async (updatedExpense) => {
  console.log(updatedExpense);
  try {
    if (updatedExpense.id == null) {
      toast.error("Expense id is null");
      return;
    }

    const data = {
      id: updatedExpense.id,
      amount: updatedExpense.amount,
      date: updatedExpense.date,
      expenseTitle: updatedExpense.expenseTitle,
      category: updatedExpense.category,
      Notes: updatedExpense.notes,
    };
    console.log(updatedExpense.id);

    const response = await axios.put(
      `http://localhost:3000/api/expense/edit`,
      data
    );
    if (response.status === 200) {
      getExpenses();
      toast.success(response.data.message);
      closeEditModal();
    }
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};


const fileteredExpenses = computed(() => {
  if (!searchQuery.value) {
    return expenses.value;
  }
  return expenses.value.filter((expense) => {
    return expense.expenseTitle
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });
});


</script>
