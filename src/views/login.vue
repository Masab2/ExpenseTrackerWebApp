<template>
  <div class="flex items-center justify-center h-screen bg-gray-50">
    <div class="bg-white shadow-lg rounded-xl p-12 w-full max-w-md space-y-8">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>
      <div class="flex flex-col space-y-5">
        <form class="flex flex-col space-y-5" @submit.prevent="submitForm">
          <input v-model="form.email" type="email" placeholder="Email"
            class="w-full px-5 py-3 border border-gray-300 rounded-md text-lg" />
          <input v-model="form.password" type="password" placeholder="Password"
            class="w-full px-5 py-3 border border-gray-300 rounded-md text-lg" />
          <button type="submit" onsubmit="submitForm"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold text-center py-3 rounded-md transition duration-200 disabled:opacity-50">
            Login
          </button>

          <router-link to="/register"
            class="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-semibold text-center py-3 rounded-md transition duration-200">
            Register
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification';


const toast = useToast();
const router = useRouter()

const form = reactive({
  email: "",
  password: "",
});

async function submitForm() {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", form);
    if (response.status === 200) {
      toast.success('Login successful');
      console.log(response.data);
      localStorage.setItem('userId', response.data.user.id);
      form.email = "";
      form.password = "";
      router.push('/dashboard')
    } else {
      toast.error('Login failed');
    }
  } catch (error) {
    console.log(error);
    toast.error('Login failed');
  }
}
</script>
