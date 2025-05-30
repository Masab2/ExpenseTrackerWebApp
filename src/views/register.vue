<template>
    <div class="flex items-center justify-center h-screen bg-gray-50">
        <div class="bg-white shadow-lg rounded-xl p-12 w-full max-w-md space-y-8">
            <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Register</h2>
            <form class="flex flex-col space-y-5" @submit.prevent="submitForm">
                <input v-model="form.name" type="text" placeholder="Username"
                    class="w-full px-5 py-3 border border-gray-300 rounded-md text-lg" />
                <input v-model="form.email" type="email" placeholder="Email"
                    class="w-full px-5 py-3 border border-gray-300 rounded-md text-lg" />
                <input v-model="form.password" type="password" placeholder="Password"
                    class="w-full px-5 py-3 border border-gray-300 rounded-md text-lg" />
                <button type="submit" onsubmit="submitForm"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold text-center py-3 rounded-md transition duration-200 disabled:opacity-50">
                    Register
                </button>

                <router-link to="/"
                    class="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-semibold text-center py-3 rounded-md transition duration-200">
                    Login
                </router-link>
            </form>
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
    name: "",
    email: "",
    password: "",
});

async function submitForm() {
    console.log("Submitting form:", { ...form });
     try {
        const response = await axios.post("http://localhost:3000/api/auth/register", form);
        if (response.status === 201) {
            toast.success('Registration successful');
            form.name = "";
            form.email = "";
            form.password = "";
            router.push('/')
        }else{
            toast.error('Registration failed');
        }
    } catch (error) {
        toast.error('Registration failed');
    }
}
</script>
