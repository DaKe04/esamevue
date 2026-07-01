<script setup>
import Navbar from '../components/navbar.vue'
import TravelSection from '../components/TravelSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-[#E52037] text-white flex flex-col">
    <Navbar />
    <main class="flex-1 pt-20 md:pt-24">
      <TravelSection />
    </main>

    <FooterSection />
  </div>
</template>