<template>
  <Container id="materials" class="text-primary">
    <SectionHeading color="text-primary" hrBorder="border-primary"
      >MATERIĀLS</SectionHeading
    >
    <article class="flex flex-col md:flex-row py-6 gap-4">
      <div>
        <img
          class="rounded mx-auto"
          src="../assets/img/materials/drill.jpeg"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-xl">
          Mūsdienīgs materiāls, kas sastāv no tīra putu polistirola (EPS)
        </h1>
        <div class="flex flex-col gap-2">
          <div>
            <p>
              Tas apvieno izturību ar izcilu siltumizolāciju un ļoti mazu svaru.
              Tas ir gan elastīgi izmantojams konstrukcijas elements, gan
              augstas kvalitātes izolācijas materiāls. Šī kombinācija nozīmē, ka
              <span class="font-bold">COMPACFOAM</span> materiāls ir ļoti
              daudzpusīgs.
            </p>
          </div>

          <div>
            <p>
              Mūsu paneļiem, stieņiem, profila stieņiem, kubiem un blokveida
              izstrādājumiem ir salīdzinoši neliels svars. Tas atvieglo
              apstrādi. Tos var arī viegli skrūvēt, urbt, zāģēt, kalibrēt un
              frēzēt ar parastajām kokapstrādes mašīnām.
            </p>
          </div>

          <div>
            <p>
              Lokanības īpašības ļauj materiālam kompensēt kontaktvirsmas
              nelīdzenumus bez jebkādiem bojājumiem.
              <span class="font-bold">COMPACFOAM</span> materiāls ir izturīgs
              pret salu un mitrumu. Tas novērš uzbriešanu un saraušanos un
              padara materiālu izturīgu pret puvi, novecošanu, kā arī par
              nenoārdāmu.
            </p>
          </div>

          <div>
            <p>
              Izstrādājumu klāsts aptver gan standarta paneļus, gan detaļas, kas
              izgatavotas pēc klienta specifikācijām.
            </p>
          </div>

          <div>
            <p>
              <span class="font-bold">COMPACFOAM</span> materiāls ir
              pārstrādājams, nav sajaucams un atbilst visām ilgtspējīgas, videi
              draudzīgas būvniecības prasībām. Mūsu produkti ir iekļauti Vācijas
              Ilgtspējīgas būvniecības padomes (DGNB) sarakstā. Pateicoties
              <span class="font-bold">COMPACFOAM</span> materiāla īpašībām,
              paveras jaunas pieejas risinājumiem mūsdienu būvniecībā.
            </p>
          </div>
        </div>
      </div>
    </article>
    
  </Container>
</template>

<script setup>
import Container from "@/components/Container.vue";
import SectionHeading from "./SectionHeading.vue";
</script>
