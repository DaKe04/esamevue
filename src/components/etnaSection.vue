<script setup>
import PrimaryButton from './PrimaryButton.vue'
</script>

<template>
    <section class="relative w-full min-h-screen bg-slate-900 text-white flex justify-center items-center overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="/etna.jpeg"
        alt="Etna"
        class="h-full w-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-linear-to-r from-black/30 via-black/20 to-black/10"></div>
      <div class="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
    </div>

    <div class="relative z-10 flex min-h-screen w-full items-center px-6 py-20 md:px-12 md:py-24">
      <div class="w-full max-w-6xl mx-auto">
        <div class="flex w-full max-w-3xl flex-col items-start text-left space-y-2 md:space-y-3">
          <p class="text-sm font-bold uppercase text-white md:text-base">
            L'esperienza MUST TRY
          </p>

          <h2 class="text-5xl font-black uppercase md:text-7xl">
            La nostra
            <br />
            mongolfiera
            <br />
            da battaglia
          </h2>

          <RouterLink to="/etna" class="mt-16 md:mt-24 lg:mt-28 inline-flex">
            <PrimaryButton>Scopri</PrimaryButton>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>