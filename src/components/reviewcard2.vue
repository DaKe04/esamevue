<template>
  <div class="w-full max-w-3xl flex flex-col items-start text-left text-white space-y-4">
    <div class="flex space-x-2">
      <div v-for="n in 4" :key="n" class="w-3.5 h-3.5 rounded-full bg-white"></div>
    </div>

    <p class="text-sm md:text-base font-light opacity-95 leading-relaxed tracking-wide">
      “Il volo in mongolfiera all’alba vale da solo il viaggio. Salita lenta, nessuno che spinge, panorama incredibile. Ho guardato il mare in silenzio per mezz’ora senza pensare a niente.”
    </p>

    <span class="text-sm font-medium opacity-90">
      -Carlo, 74
    </span>

    <div class="w-full border-t border-dashed border-white/40 pt-4"></div>
  </div>
</template>
