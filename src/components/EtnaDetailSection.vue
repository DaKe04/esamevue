<script setup>
import { ref } from 'vue'
import reviewcard from './reviewcard.vue'
const activeTab = ref('panoramica')
</script>

<template>
  <section class="w-full bg-[#f59d27] text-white flex justify-center items-center py-16 px-6 md:py-24 md:px-12">
    
    <div class="w-full max-w-6xl">
      <div class="grid gap-8 md:gap-10 pt-12 md:pt-16">
        <div class="flex flex-col gap-3 md:gap-4">
          <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <h2 class="text-4xl font-black leading-none md:text-6xl">
                Etna dall'alto
              </h2>
              <p class="mt-3 text-sm font-light text-white/90 md:text-base">
                4.8 (4829 recensioni)
              </p>
            </div>
          </div>
        </div>

        <div class="grid gap-5">
          <img src="/etna.jpeg" alt="Etna" class="h-64 w-full object-cover md:h-152" />

          <div class="grid gap-5 md:grid-cols-2">
            <img src="/etnatop.jpeg" alt="Etna dall'alto" class="h-56 w-full object-cover md:h-80" />
            <img src="/etnafar.jpeg" alt="Etna lontano" class="h-56 w-full object-cover md:h-80" />
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4 text-sm font-semibold md:max-w-2xl md:text-base cursor-pointer select-none">
          
          <div 
            @click="activeTab = 'panoramica'"
            :class="[activeTab === 'panoramica' ? 'border-white border-b-2 text-white' : 'border-white/40 border-b opacity-70', 'pb-3 transition-all']"
          >
            Panoramica
          </div>
          
          <div 
            @click="activeTab = 'dettagli'"
            :class="[activeTab === 'dettagli' ? 'border-white border-b-2 text-white' : 'border-white/40 border-b opacity-70', 'pb-3 transition-all']"
          >
            Dettagli
          </div>
          
          <div 
            @click="activeTab = 'recensioni'"
            :class="[activeTab === 'recensioni' ? 'border-white border-b-2 text-white' : 'border-white/40 border-b opacity-70', 'pb-3 transition-all']"
          >
            Recensioni
          </div>

        </div>

        <div class="max-w-3xl space-y-4 text-sm leading-relaxed text-white/95 md:text-base min-h-37.5">
          
      <div v-show="activeTab === 'panoramica'" class="space-y-4">
            <p class="font-semibold uppercase tracking-wide">Info</p>
            <p>
Lasciatevi cullare dalla brezza e vivete l'emozione di un volo in mongolfiera sul Lago di Garda, pensato appositamente per offrirvi il massimo del comfort e della sicurezza. 
All'alba, quando l'aria è più dolce, salirete a bordo delle nostre ceste ad accesso facilitato per un decollo 
così morbido che vi sembrerà di fluttuare su un tappeto volante. Per circa un'ora ammirerete dall'alto le acque azzurre del lago, i borghi storici e i vigneti, assistiti in ogni momento da piloti esperti e personale dedicato.
Un'avventura rilassante, senza sforzi né vertigini, che si concluderà a terra con un allegro brindisi a base di vini locali
e prodotti tipici. Un'esperienza magica da raccontare a figli e nipoti!            </p>
          </div>

          <div v-show="activeTab === 'dettagli'" class="space-y-4">
            <p class="font-semibold uppercase tracking-wide">Specifiche</p>
            <p>
Destinazione: Lago di Garda <br />
Durata: 1 giorno (esperienza all'alba) <br />
Età consigliata: 60–80 anni <br />
Livello di difficoltà: Molto basso <br />
Adatto a: persone con artrosi, artrite o ridotta mobilità (grazie a ceste con sportello e sedute) <br />
Esperienza principale: volo in mongolfiera panoramico all’alba (circa 60 minuti)<br /> 
Ritmo del viaggio: lento, rilassante e senza sforzi fisici <br />
Periodo consigliato: primavera e inizio autunno (per temperature miti e massima visibilità) <br />
Non consigliato a: chi soffre di vertigini importanti o gravi problemi di equilibrio <br />
Indice di Decollabilità: Alto (grazie alle condizioni microclimatiche stabili del lago)            </p>
          </div>

       <!-- 3. TESTO RECENSIONI CON IL NUOVO COMPONENTE -->
          <div v-show="activeTab === 'recensioni'" class="space-y-6 pt-2">
            
            <p class="font-semibold uppercase tracking-wide">
Cosa ne pensa chi è sopravissuto            </p>
            
            <reviewcard
              text="Il volo in mongolfiera all'alba vale da solo il viaggio. Salita lenta, nessuno che spinge, panorama incredibile. Ho guardato il mare in silenzio per mezz'ora senza pensare a niente."
              author="-Carlo, 74"
            />
            <reviewcard
              text="Quando l'ho raccontato ai miei nipoti non mi hanno creduto. Poi ho mostrato le foto. Adesso sono loro a essere gelosi. Organizzazione perfetta e panorama incredibile."
              author="-Giovanni, 67"
              :showDivider="false"
            />
     

          </div>
</div>
        </div>
      </div>
  </section>
</template>
