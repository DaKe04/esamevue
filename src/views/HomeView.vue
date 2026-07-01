<script setup>
import Navbar from '../components/navbar.vue'
import Hero from '../components/hero.vue'
import About from '../components/about.vue'
import CarouselSection from '../components/carouselsection.vue'
import EtnaSection from '../components/etnaSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-slate-900 font-sans antialiased">
    <Navbar />
    <Hero />
    <About />
    <CarouselSection />
    <EtnaSection />
    <FooterSection />
  </div>
</template>
