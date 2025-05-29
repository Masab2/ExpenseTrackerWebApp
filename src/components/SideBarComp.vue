<template>
  <aside class="w-64 bg-blue-900 text-white h-screen p-4 space-y-4">
    <div class="text-2xl font-bold mb-6">💰 Expense Tracker</div>

    <nav class="flex flex-col space-y-2">
      <router-link
        to="/Dashboard"
        class="hover:bg-blue-700 px-4 py-2 rounded-md"
        active-class="bg-blue-700"
        exact
      >
        📊 Dashboard
      </router-link>
      <router-link
        to="/add"
        class="hover:bg-blue-700 px-4 py-2 rounded-md"
        active-class="bg-blue-700"
      >
        ➕ Add Expense
      </router-link>
      <router-link
        to="/settings"
        class="hover:bg-blue-700 px-4 py-2 rounded-md"
        active-class="bg-blue-700"
      >
        ⚙️ Settings
      </router-link>
      <button class="text-left hover:bg-red-600 px-4 py-2 rounded-md mt-auto" @click="logout">
        🚪 Logout
      </button>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function logout() {
  router.push('/')
}
</script>