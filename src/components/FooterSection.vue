<template>
  <footer class="w-full bg-[#2bbab3] text-white px-6 py-14 md:px-12 md:py-16">
    <div class="w-full max-w-6xl mx-auto">
      <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div class="max-w-3xl space-y-6 md:space-y-8">
          <h2 class="text-4xl md:text-5xl font-black leading-none">
            Alta Pensione
          </h2>

          <div class="space-y-4 md:space-y-5">
            <RouterLink to="/" class="block border-t border-white/20 pt-4 text-lg md:text-xl font-medium hover:opacity-80">
              Chi siamo
            </RouterLink>
            <RouterLink to="/viaggi" class="block border-t border-white/20 pt-4 text-lg md:text-xl font-medium hover:opacity-80">
              I nostri viaggi ad hoc
            </RouterLink>
            <RouterLink to="/recensioni" class="block border-t border-white/20 pt-4 text-lg md:text-xl font-medium hover:opacity-80">
              Cosa ne pensa chi ci ha provato
            </RouterLink>
          </div>

          <div class="pt-4 text-sm md:text-base text-white/90 leading-relaxed">
            <p>Loremipsum @2024 The dolars voluptas</p>
            <p>No longer want to receive these simply?</p>
          </div>
        </div>

        <div class="w-full max-w-sm self-center md:ml-auto md:self-start md:-mt-16 md:max-w-md md:-mr-4">
          <img
            src="/jumping.gif"
            alt="Persona che salta"
            class="w-full h-auto object-contain md:scale-110 md:origin-top-right"
          />
        </div>
      </div>
    </div>
  </footer>
</template>