<template>
  <Container id="uznemums" class="text-primary">
    <SectionHeading color="text-primary" hrBorder="border-primary"
      >CF FBA PALODZES SAVIENOJUMA IZOLĀCIJAS PROFILS</SectionHeading
    >
    <section class="flex flex-col md:flex-row justify-between gap-4">
      <div class="md:w-1/4 flex md:flex-col gap-4 justify-center">
        <div>
          <img
            class="rounded shadow-xl"
            src="../assets/img/cffba/fba_1.jpg"
            alt="cffba profile"
          />
        </div>
        <div>
          <img
            class="rounded shadow-xl"
            src="../assets/img/cffba/fba_2.jpg"
            alt="cffba profile"
          />
        </div>
      </div>
      <div class="w-3/4">
        <p>
          COMPACFOAM FBA profili aizstāj parastos PVC palodžu savienojumu
          izolācijas profilus. Optimālā COMPACFOAM lambda vērtība ļauj iegūt
          logus ar zemāku U vērtību bez siltuma noplūdes.
        </p>

        <p class="py-6">
          CF FBA lielā izturība nozīmē, ka montāžu bez problēmām var veikt ar
          parastajām palodzes skrūvēm. CF FBA var piegādāt ar pielāgotiem
          šķērsgriezumiem un kontūrām.
        </p>
      </div>
    </section>

    <!-- hr -->
    <section class="py-12">
      <div class="flex justify-between gap-4 border-b border-primary">
        <div class="flex justify-between">
          <div class="bg-orange-600 px-2 py-1 min-w-24 font-bold text-black">
            <span class="italic">CF</span
            ><span class="text-secondary">100</span>
          </div>
          <div class="bg-black text-white italic px-2 py-1">FBA</div>
        </div>
        <div class="w-full flex items-center text-xs justify-between">
          <div>Standarta garums: 2,350 mm</div>
          <div>vertikālais šķērsgriezums</div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-4 text-xl md:text-lg text-center md:text-left"
      >

        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/profine.svg" alt="" />
          </div>
          <div class="pt-4 flex justify-center">U=0,77 W/m2K Profine 76, 88</div>
        </div>


        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/gelan.svg" alt="" />
          </div>
          <div class="pt-4 flex items-start justify-center">U=0,70 W/m2K
Gealan S8000 iQ, S9000 iQ</div>
        </div>

        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/rehau.svg" alt="" />
          </div>
          <div class="pt-4 flex items-start justify-center">U=0,65 W/m2K
Rehau Geneo</div>
        </div>

        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/veka.svg" alt="" />
          </div>
          <div class="pt-4 flex items-start justify-center">U=0,77 W/m2K
VEKA SL70, SL82</div>
        </div>

        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/aluplast.svg" alt="" />
          </div>
          <div class="pt-4 flex items-start justify-center">U=0,88 W/m2K
Aluplast Ideal 5000, Ideal 4000</div>
        </div>


        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/aluplast2.svg" alt="" />
          </div>
          <div class="pt-4 flex items-start justify-center">U=0,66 W/m2K
Aluplast Ideal 8000, Ideal 7000</div>
        </div>

        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/salamander.svg" alt="" />
          </div>
          <div class="pt-4 flex items-start justify-center">U=0,79 W/m2K
Salamander Streamline, SL76, 3D</div>
        </div>

        <div class="bg-secondary p-6 rounded shadow-2xl">
          <div class="h-48 flex items center justify center">
            <img class="mx-auto" src="../assets/img/cffba/schuco.svg" alt="" />
          </div>
          <div class="pt-4 flex items-start justify-center">U=0,74 W/m2K
Schüco SI 82, Alu Inside</div>
        </div>




      </div>
    </section>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import SectionHeading from "./SectionHeading.vue";
import SecondaryHeading from "./SecondaryHeading.vue";
import Paragraph from "./Paragraph.vue";
</script>
