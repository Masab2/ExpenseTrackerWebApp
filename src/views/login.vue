<template>
  <div class="flex items-center justify-center h-screen bg-gray-50">
    <div class="bg-white shadow-lg rounded-xl p-12 w-full max-w-md space-y-8">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>
      <div class="flex flex-col space-y-5">
        <input
          type="email"
          placeholder="Email"
          class="w-full px-5 py-3 border border-gray-300 rounded-md text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          class="w-full px-5 py-3 border border-gray-300 rounded-md text-lg"
        />
        <router-link
          to="/dashboard"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold text-center py-3 rounded-md transition duration-200"
        >
          Login
        </router-link>

        <router-link
          to="/register"
          class="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg font-semibold text-center py-3 rounded-md transition duration-200"
        >
          Register
        </router-link>
      </div>
    </div>
  </div>
</template>
