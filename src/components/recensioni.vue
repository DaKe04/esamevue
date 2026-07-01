<script setup>
import reviewbar from './reviewbar.vue'
</script>

<template>
  <section 
    class="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 md:px-12"
    style="
      background-image: url('/vecchia.jpeg');
      background-size: cover; 
      background-position: center;
    "
  >
    <div class="w-full max-w-4xl z-10 text-white flex flex-col items-center">
    
<h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-8 w-full text-center max-w-2xl">
  Sei atterrato? <br /> Raccontacelo.
</h1>
      
      <reviewbar />

    </div>
  </section>
</template>