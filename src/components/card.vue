<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  bgColor: String,
  linkTo: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    :class="[
      bgColor,
      'w-70 md:w-85 shrink-0 snap-center p-8 text-white flex flex-col justify-between min-h-112.5 md:min-h-125'
    ]"
  >
    <div class="flex flex-col space-y-2">
      <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none">
        {{ title }}
      </h3>
      <p class="text-sm md:text-base opacity-90 font-light leading-snug">
        {{ description }}
      </p>
    </div>

    <div class="w-full flex justify-center items-end mt-6">
      <RouterLink
        v-if="linkTo"
        :to="linkTo"
        class="inline-flex cursor-pointer transition-transform duration-300 hover:scale-105"
        @pointerdown.stop
        @click.stop
      >
        <img 
          :src="image" 
          :alt="title" 
          class="w-full max-w-45 md:max-w-55 h-auto object-contain"
        />
      </RouterLink>

      <img 
        v-else
        :src="image" 
        :alt="title" 
        class="w-full max-w-45 md:max-w-55 h-auto object-contain"
      />
    </div>
  </div>
</template>