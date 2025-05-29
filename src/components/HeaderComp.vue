<template>
  <header class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
        E
      </div>
      <h1 class="text-2xl font-semibold text-gray-800">{{ props.msg }}</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
})

</script>

