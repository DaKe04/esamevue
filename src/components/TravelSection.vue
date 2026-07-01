<script setup>
import { ref, onBeforeUnmount } from 'vue'
import TravelBox from './travelbox.vue'

const travelCards = [
  {
    title: 'Lago di Como',
    image: '/como.jpeg',
    imageAlt: 'Lago di Como',
    rating: 4.5,
    reviews: 4829,
    price: 'A partire da 16€ per adulto',
  },
  {
    title: 'Torre di Pisa',
    image: '/pisa.png',
    imageAlt: 'Torre di Pisa',
    rating: 4,
    reviews: 5489,
    price: 'A partire da 33€ per adulto',
  },
  {
    title: 'Colosseo',
    image: '/colosseo.png',
    imageAlt: 'Colosseo',
    rating: 5,
    reviews: 3245,
    price: 'A partire da 26€ per adulto',
  },
  {
    title: 'Etna',
    image: '/etna.jpeg',
    imageAlt: 'Etna',
    rating: 5,
    reviews: 2180,
    price: 'A partire da 21€ per adulto',
    linkTo: '/etna',
  },
   {
    title: 'Dolomiti',
    image: '/dolomiti.png',
    imageAlt: 'Dolomiti',
    rating: 4.6,
    reviews: 3098,
    price: 'A partire da 16€ per adulto',
  },
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
  container.scrollLeft = scrollLeft.value - delta * 1.5
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
  <section class="w-full bg-[#ef2b3b] text-white py-16 px-6 md:py-24 md:px-12 flex justify-center overflow-hidden">
<div class="w-full max-w-6xl flex flex-col gap-10 md:gap-14">
      <div class="flex flex-col text-left space-y-4 w-full max-w-3xl">
        
        <div class="flex flex-col space-y-2">
          
          <h4 class="text-lg font-bold uppercase tracking-wide">
            i viaggi perfetti per il
          </h4>

          <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Palo della Luce
          </h2>
          
          <p class="text-sm md:text-base opacity-90 font-light leading-relaxed">
            4.8 (4829 recensioni)
          </p>

        </div>
      </div>

      <div
        ref="carouselRef"
        class="hide-scrollbar flex gap-5 overflow-x-auto pb-4 pr-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none md:pr-0"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="stopDragging"
        @pointercancel="stopDragging"
        @pointerleave="stopDragging"
      >
        <TravelBox
          v-for="card in travelCards"
          :key="card.title"
          class="snap-start"
          v-bind="card"
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