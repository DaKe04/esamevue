<script setup>
import reviewcard from './reviewcard.vue'

const honestReviews = [
  {
    stars: 4,
    text: 'Il volo in mongolfiera all\'alba vale da solo il viaggio. Salita lenta, nessuno che spinge, panorama incredibile. Ho guardato il mare in silenzio per mezz\'ora senza pensare a niente.',
    author: '-Carlo, 74',
  },
  {
    stars: 5,
    text: 'Pensavo fosse una semplice gita in mongolfiera. Mi sono ritrovata a giocare a carte sopra le nuvole con persone che non conoscevo e a ridere come non facevo da anni.',
    author: '-Maria, 71',
  },
  {
    stars: 5,
    text: 'Quando l\'ho raccontato ai miei nipoti non mi hanno creduto. Poi ho mostrato le foto. Adesso sono loro a essere gelosi. Organizzazione perfetta e panorama incredibile.',
    author: '-Giovanni, 67',
  },
  {
    stars: 4,
    text: 'Mi aspettavo un\'attività tranquilla, invece è stata una vera avventura. Sentirsi sospesi sopra le Dolomiti è qualcosa che non dimenticherò facilmente.',
    author: '-Roberta, 75',
  },
  {
    stars: 5,
    text: 'Ho sempre avuto paura dell\'altezza. Dopo dieci minuti ero impegnato a chiacchierare e godermi il panorama. È una sensazione di libertà difficile da spiegare.',
    author: '-Bruno, 70',
  },
  {
    stars: 5,
    text: 'Finalmente un regalo diverso dal solito. Una giornata organizzata benissimo e piena di emozioni. Lo rifarei domani.',
    author: '-Giuseppe, 81',
  },
  {
    stars: 4,
    text: 'Il momento più bello? Una partita a carte a centinaia di metri da terra. Mai avrei pensato di poter dire una frase del genere.',
    author: '-Franco, 77',
  },
  {
    stars: 5,
    text: 'Alta Pensione dimostra che la voglia di divertirsi non ha età. Panorama spettacolare, atmosfera rilassata e tante risate. Consigliatissimo.',
    author: '-Luciana, 71',
  },
]
</script>

<template>
  <section class="w-full bg-[#f59d27] text-white px-6 py-16 md:px-12 md:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <div class="max-w-3xl">
        <h2 class="text-4xl font-black leading-none md:text-6xl">
          Alcune delle recensione più oneste:
        </h2>
      </div>

      <div class="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
        <div class="space-y-6 md:space-y-8">
          <reviewcard
            v-for="(review, index) in honestReviews.slice(0, 4)"
            :key="`left-${index}`"
            :stars="review.stars"
            :text="review.text"
            :author="review.author"
            :showDivider="index !== 3"
          />
        </div>

        <div class="space-y-6 md:space-y-8">
          <reviewcard
            v-for="(review, index) in honestReviews.slice(4)"
            :key="`right-${index}`"
            :stars="review.stars"
            :text="review.text"
            :author="review.author"
            :showDivider="index !== 3"
          />
        </div>
      </div>
    </div>
  </section>
</template>