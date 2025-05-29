<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <Header msg="Expense Tracker" />
      <main class="p-4 overflow-y-auto flex-1 bg-gray-50">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/SideBarComp.vue'
import Header from '../components/HeaderComp.vue'
</script>
