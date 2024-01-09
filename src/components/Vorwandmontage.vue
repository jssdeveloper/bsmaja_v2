<template>
  <Container id="uznemums" class="text-primary">
    <SectionHeading color="text-primary" hrBorder="border-primary"
      >KLIMA KONFORM SYSTEM 2.0 (VORWANDMONTAGE)</SectionHeading
    >
    <section class="py-6">
      <div class="flex max-w-lg items-center mx-auto">
        <div class="bg-red-200 w-1/2">
          <img src="../assets/img/vorwandmontage/konform_1.jpg" alt="" />
        </div>
        <div class="bg-green-400 w-1/2">
          <img src="../assets/img/vorwandmontage/konform_2.jpg" alt="" />
        </div>
      </div>
    </section>

    <article class="flex flex-col gap-4">
      <div>
        Pēdējos gados visā Eiropā tika pastiprināti Energoefektivitātes
        noteikumi, lai vēl vairāk optimizētu energoefektivitāti visās ēkas
        daļās. Diemžēl tas arī projektētājiem, arhitektiem un būvuzņēmējiem
        radīja lielas problēmas.
      </div>
      <div>
        Piemēram, montāžas ekspertiem ir jāpiedāvā optimizēti montāžas varianti
        ar inovatīviem risinājumiem, kas ne tikai atbilst visiem noteikumiem,
        bet arī labi darbojas praksē.
      </div>
      <div>
        Jums kā montāžas speciālistam ir pieejami trīs pievilcīgi priekšējo
        sienu montāžas varianti (standarta montāža, montāža no ārpuses un
        montāža no apakškrāmja), kas ir ne tikai pietiekami daudzpusīgi, lai
        piedāvātu individuālus risinājumus, bet arī ātri un viegli uzstādāmi.
      </div>
      <div class="flex gap-4 items-start">
        <div class="max-w-48 md:max-w-16">
          <img src="../assets/img/vorwandmontage/ift.jpg" alt="" />
        </div>
        <div>
          KLIMA KONFORM SYSTEM 2.0 sastāv tikai no 4 sastāvdaļām, ir paredzēta
          universālai lietošanai un ir izturējusi ift Rosenheim pārbaudi.
        </div>
      </div>
    </article>

    <!-- Cards -->
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg md:text-lg py-6"
    >
      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle"
          >Pretkritiena stiprinājums saskaņā ar ETB 2,8 kN</span
        >
      </div>

      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle"
          >līdz RC2 izturība pret ielaušanos
        </span>
      </div>

      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle"
          >līdz 64 dB kopējais troksnis
        </span>
      </div>
      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle"
          >Piemērots uzstādīšanai bez siltumnoplūdes
        </span>
      </div>

      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle">B1 ugunsdzēsības klase </span>
      </div>

      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle"
          >W/mK 0,04 siltumvadītspēja
        </span>
      </div>

      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle"
          >4. klase svārsta trieciena tests
        </span>
      </div>

      <div
        class="p-4 bg-secondary rounded-lg flex items-center justify-center aspect-square shadow-2xl"
      >
        <span class="inline-block align-middle"
          >līdz 3,000 Pa spiediens un iesūkšana
        </span>
      </div>
    </div>

    <!-- Fasade Foto -->
    <div
      class="flex max-w-xl mx-auto items-end justify-center text-center gap-6 py-6"
    >
      <div class="w-1/2">
        <div>Iepriekšējā standarta logu uzstādīšana</div>
        <div>
          <img class="rounded" src="../assets/img/vorwandmontage/konform_3.jpg" alt="" />
        </div>
      </div>
      <div class="w-1/2">
        <div>
          KLIMA KONFORM SYSTEM 2.0 logu montāža izolācijas slānī (PVC logs)
        </div>
        <div>
          <img class="rounded" src="../assets/img/vorwandmontage/konform_4b.jpg" alt="" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import SectionHeading from "./SectionHeading.vue";
</script>
