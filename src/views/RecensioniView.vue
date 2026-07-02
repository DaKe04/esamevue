<script setup>
import Navbar from '../components/navbar.vue'
import RecensioniExtraSection from '../components/RecensioniExtraSection.vue'
import FooterSection from '../components/FooterSection.vue'
import Recensioni from '../components/recensioni.vue';
</script>

<template>
  <div class="w-full min-h-screen font-sans antialiased">
    <Navbar />
      <Recensioni />
      <RecensioniExtraSection />

    <FooterSection />
  </div>
</template>