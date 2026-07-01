<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: [Number, String],
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  linkTo: {
    type: String,
    default: '',
  },
})

const ratingMarks = computed(() => {
  const marks = []
  const safeRating = Math.max(0, Math.min(5, props.rating))
  const fullMarks = Math.floor(safeRating)
  const hasHalfMark = safeRating - fullMarks >= 0.5

  for (let index = 0; index < 5; index += 1) {
    if (index < fullMarks) {
      marks.push('full')
    } else if (index === fullMarks && hasHalfMark) {
      marks.push('half')
    } else {
      marks.push('empty')
    }
  }

  return marks
})
</script>

<template>
  <article class="w-70 md:w-76.25 shrink-0 overflow-hidden rounded-4xl bg-white text-slate-900">
    <div class="relative h-70 md:h-75 overflow-hidden bg-slate-200">
      <RouterLink
        v-if="linkTo"
        :to="linkTo"
        class="block h-full w-full cursor-pointer"
        @pointerdown.stop
        @click.stop
      >
        <img
          :src="image"
          :alt="imageAlt || title"
          class="h-full w-full object-cover"
        />
      </RouterLink>

      <img
        v-else
        :src="image"
        :alt="imageAlt || title"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="bg-[#f5f2ef] px-4 py-4">
      <h3 class="text-[1.35rem] font-semibold leading-tight text-slate-900">
        {{ title }}
      </h3>

      <div class="mt-1 flex items-center gap-2 text-sm text-slate-900/90">
        <span class="font-medium">{{ rating.toFixed(1).replace(/\.0$/, '') }}</span>

        <div class="flex items-center gap-1">
          <span
            v-for="(mark, index) in ratingMarks"
            :key="`${title}-${index}`"
            class="inline-flex h-3.5 w-3.5 rounded-full"
            :class="mark === 'full' ? 'bg-[#ffa63a]' : mark === 'half' ? 'bg-[linear-gradient(90deg,#ffa63a_50%,#e7e2dc_50%)]' : 'bg-[#e7e2dc]'"
          />
        </div>

        <span v-if="reviews !== ''" class="text-slate-900/80">
          ({{ reviews }})
        </span>
      </div>

      <p v-if="price" class="mt-2 text-sm font-semibold text-slate-900/90">
        {{ price }}
      </p>
    </div>
  </article>
</template>