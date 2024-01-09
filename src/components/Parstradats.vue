<template>
  <Container id="uznemums" class="text-primary">
    <SectionHeading color="text-primary" hrBorder="border-primary"
      >PĀRSTRĀDĀTS MATERIĀLS</SectionHeading
    >
    <article class="flex flex-col md:flex-row py-6 gap-4">
      <div>
        <img
          class="rounded mx-auto"
          src="../assets/img/parstradats/recycled.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-xl">COMPACFOAM kļūst par COMPACFOAM eco</h1>
        <div class="flex flex-col gap-2">
          <div>
            <p>
              Mēs varam pārstrādāt 100% COMPACFOAM atkritumu, izmantojot nesen
              izstrādātu procesu, ko sauc par daļiņu tehnoloģiju. CF eco, kas ir
              šī procesa rezultāts, piemīt tikpat izcilas īpašības kā
              COMPACFOAM: augsta izturība un izcila siltumizolācija.
            </p>
          </div>

          <div>
            <p>
              Nesajauktus atkritumus klienti var nodot atpakaļ ražotājam. Tas
              padara COMPACFOAM eco par īpaši ilgtspējīgu produktu. Turklāt
              klientam nerodas parastās utilizācijas izmaksas.
            </p>
          </div>
        </div>
      </div>
    </article>
    <div class="py-12">
      <div
        class="bg-slate-100 max-w-xs mx-auto p-6 rounded-lg grid grid-cols-2 items-center"
      >
        <div class="align-middle items-center justify-center">
          <img
            class="object-right"
            src="../assets/img/parstradats/dgnb_logo.png"
            alt=""
          />
        </div>
        <div>
          <p class="text-xs font-normal text-primary">
            COMPACFOAM un<br />
            COMPACFOAM eco<br />
            ir iekļauts DGNB<br />
            sarakstā.
          </p>
        </div>
      </div>
    </div>
    <div class=" mx-auto text-xs text-center">
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end"
      >
        <div>
          <span class="py-2 text-lg lg:text-xs">PLASTISKS</span>
          <img src="../assets/img/parstradats/7.jpg" alt="" />
        </div>

        <div>
          <span class="py-2 text-lg lg:text-xs">DIFŪZIJAI ATVĒRTS</span>
          <img src="../assets/img/parstradats/8.jpg" alt="" />
        </div>

        <div>
          <span class="py-2 text-lg lg:text-xs">AUGSTA SPIEDES STIPRĪBA</span>
          <img src="../assets/img/parstradats/9.jpg" alt="" />
        </div>

        <div>
          <span class="py-2 text-lg lg:text-xs">MAZS SVARS</span>
          <img src="../assets/img/parstradats/10.jpg" alt="" />
        </div>

        <div>
          <span class="py-2 text-lg lg:text-xs">BEZ BIOCĪDIEM</span>
          <img src="../assets/img/parstradats/11.jpg" alt="" />
        </div>

        <div>
          <span class="py-2 text-lg lg:text-xs">PĀRSTRĀDĀJAMS</span>
          <img src="../assets/img/parstradats/12.jpg" alt="" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import SectionHeading from "./SectionHeading.vue";
</script>
