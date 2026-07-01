<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <div>
<nav class="fixed top-0 left-0 w-full z-50 flex justify-center md:justify-center items-center p-6 bg-white/20 backdrop-blur-md border-b border-white/10 text-white">  
      <div class="hidden md:flex space-x-6 text-2xl">
        <RouterLink to="/" class="hover:opacity-80">Home</RouterLink>
        <RouterLink to="/recensioni" class="hover:opacity-80">Recensioni</RouterLink>
      </div>

      <button @click="isOpen = true" class="md:hidden text-white focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex flex-col justify-center items-center text-white overflow-hidden"
      style="
        background-image: url('/mongolfiera.webp');
        background-size: cover;
        background-position: center;
      "
    >
      <div class="absolute inset-0"></div>
      <button @click="isOpen = false" class="absolute top-6 right-6 z-10 text-4xl">&times;</button>
      <div class="relative z-10 flex flex-col space-y-8 text-center text-3xl font-bold tracking-wider">
        <RouterLink to="/" @click="isOpen = false">HOME</RouterLink>
        <RouterLink to="/recensioni" @click="isOpen = false">RECENSIONI</RouterLink>
      </div>
    </div>
  </div>
</template>