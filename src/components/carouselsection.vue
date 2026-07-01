<script setup>
import { ref, onBeforeUnmount } from 'vue'
import Card from './card.vue'

const characters = [
  {
    title: 'Il palo della luce',
    description: 'Cervicale, infiammazioni, abitudinario, rompiscatole.',
    image: '/palo.png',
    bgColor: 'bg-[#E52037]' 
  },
  {
    title: 'La Vecchietta intraprendente',
    description: 'Ernia del disco, osteoporosi, temeraria, instancabile.',
    image: '/intraprendente.png',
    bgColor: 'bg-[#46B9B0]' 
  },
  {
    title: 'Il Pazzo',
    description: 'Tachicardia, acufene, eccentrico, imprevedibile.',
    image: '/Pazzo.png',
    bgColor: 'bg-[#F59D27]' 
  },
  {
    title: 'La Vecchia Scorbutica',
    description: ' Ulcera gastrica, insonnia, cinica, ipercritica.',
    image: '/scorbutica.png',
    bgColor: 'bg-[#46B9B0]' 
  },
  {
    title: 'Il Sapiente',
    description: ' Forte miopia, ipertensione, pacato, distratto',
    image: '/saggio.png',
    bgColor: 'bg-[#E52037]' 
  }
]

const carouselRef = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const activePointerId = ref(null)

function onPointerDown(event) {
  const container = carouselRef.value

  if (!container) {
    return
  }

  isDragging.value = true
  activePointerId.value = event.pointerId
  startX.value = event.clientX
  scrollLeft.value = container.scrollLeft
  container.setPointerCapture(event.pointerId)
}

function onPointerMove(event) {
  const container = carouselRef.value

  if (!container || !isDragging.value || activePointerId.value !== event.pointerId) {
    return
  }

  const delta = event.clientX - startX.value
  container.scrollLeft = scrollLeft.value - delta
}

function stopDragging(event) {
  const container = carouselRef.value

  if (container && event && activePointerId.value === event.pointerId && container.hasPointerCapture(event.pointerId)) {
    container.releasePointerCapture(event.pointerId)
  }

  isDragging.value = false
  activePointerId.value = null
}

onBeforeUnmount(() => {
  isDragging.value = false
  activePointerId.value = null
})


</script>

<template>
  <section class="w-full bg-[#E52037] text-white py-16 px-6 md:py-24 md:px-12 flex justify-center overflow-hidden">
    
    <div class="w-full max-w-6xl flex flex-col gap-10 md:gap-14">
      
      <div class="flex flex-col text-left space-y-4 md:space-y-6 w-full max-w-3xl">
        <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
          In chi ti <br> riconosci?
        </h2>
        
        <div class="flex flex-col space-y-2">
          <h4 class="text-lg font-bold uppercase tracking-wide">Come funziona?</h4>
          <p class="text-sm md:text-base opacity-90 font-normal leading-relaxed">
Scorri e scegli il tuo personaggio in base a estetica, sensazione, scogliosi e gradodi incazzatura facile. Guarda le sue caratteristiche e se trovi qualcosa che ti rispecchia cliccalo. Noi ti consigliamo dei viaggi ad hoc per te.          </p>
        </div>
      </div>

      <div
        ref="carouselRef"
        class="hide-scrollbar w-full overflow-x-auto overflow-y-hidden flex gap-0 pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="stopDragging"
        @pointercancel="stopDragging"
        @pointerleave="stopDragging"
      >
        <Card
          v-for="(char, index) in characters" 
          :key="index"
          :title="char.title"
          :description="char.description"
          :image="char.image"
          :bgColor="char.bgColor"
          :linkTo="char.image === '/palo.png' ? '/viaggi' : ''"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
    