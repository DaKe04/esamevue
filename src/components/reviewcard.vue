<script setup>
const props = defineProps({
  stars: {
    type: Number,
    default: 5,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  showDivider: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="w-full max-w-3xl flex flex-col items-start text-left text-white space-y-4">
    <div class="flex space-x-2">
      <div
        v-for="n in stars"
        :key="n"
        class="w-3.5 h-3.5 rounded-full bg-white"
      ></div>
    </div>

    <p class="text-sm md:text-base font-normal opacity-95 leading-relaxed tracking-wide">
      {{ text }}
    </p>

    <span class="text-sm font-medium opacity-90">
      {{ author }}
    </span>

    <div v-if="showDivider" class="w-full border-t border-dashed border-white/40 pt-4"></div>
  </div>
</template>
