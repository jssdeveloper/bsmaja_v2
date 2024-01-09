<template>
  <Container id="uznemums" class="text-primary">
    <SectionHeading color="text-primary" hrBorder="border-primary"
      >OPTIMĀLA LOGU UZSTĀDĪŠANA</SectionHeading
    >
    <section>
      <article class="grid grid-cols-3 gap-4">
        <div class="col-span-3 md:col-span-1">
          <img src="../assets/img/loguuzstadisana/vorwand_1.jpg" alt="" />
        </div>
        <div class="flex flex-col gap-4 col-span-3 md:col-span-2">
          <div>
            Klima Konform System 2.0 ļauj logu blokus uzstādīt tieši izolācijas
            slānī. Tāpēc ir iespējami stiprinājumi bez siltumnoplūdes barjeras.
          </div>
          <div>
            Sistēmas funkcijas
            <ul>
              <li>Viegla montāža</li>
              <li>Vienkārša profilu griešana</li>
              <li>Tikai dažas sastāvdaļas</li>
              <li>3 varianti ar dažādām blīvēšanas iespējām</li>
              <li>
                Montāža pēc plānotāja/uzstādītāja izvēles vai
                pieprasījuma.(standarta, no ārpuses un apakšrāmja)
              </li>
              <li>Vieglie materiāli</li>
              <li>Iespējama iepriekšēja izgatavošana karkasa veidā</li>
              <li>
                Ātra loga uzstādīšana, jo nav nepieciešama iepriekšēja urbšana
              </li>
              <li>
                Iespējama vēlāka logu nomaiņa bez apmešanas (apakšrāmja montāža)
              </li>
              <li>Iespējamas plašas pārkares</li>
              <li>Piemērots pretkritiena elementu (ETB) stiprināšana</li>
            </ul>
          </div>
        </div>
      </article>

      
      <article class="py-12">
        <div class="flex sm:flex-row flex-col gap-4">
          <div class="flex flex-col text-center">
            <div class="text-xl font-bold">Sānu griezums</div>
            <div>
              <img src="../assets/img/loguuzstadisana/vorwand_2.jpg" alt="" />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="text-center text-xl font-bold">Apakšdaļas griezums</div>
            <div>
              <img src="../assets/img/loguuzstadisana/vorwand_3.jpg" alt="" />
            </div>

            <div class="py-4">
              <div class="flex gap-2 items-center py-1">
                <div
                  class="h-6 w-6 bg-orange-700 text-secondary rounded grid place-items-center"
                >
                  <div>1</div>
                </div>
                <div>Klima Konform System 2.0 profils</div>
              </div>
              <div class="flex gap-2 items-center py-1">
                <div class="h-6 w-6 bg-black text-secondary rounded grid place-items-center">
                  <div>2</div>
                </div>
                <div>MS polimēru līme, balta</div>
              </div>
              <div class="flex gap-2 items-center py-1">
                <div class="h-6 w-6 bg-black text-secondary rounded grid place-items-center">
                  <div>3</div>
                </div>
                <div>Loga rāmja skrūve FK</div>
              </div>
              <div class="flex gap-2 items-center py-1">
                <div class="h-6 w-6 bg-black text-secondary rounded grid place-items-center">
                  <div>4</div>
                </div>
                <div>Loga rāmja skrūve ZK</div>
              </div>
              <div class="flex gap-2 items-center py-1">
                <div
                  class="h-6 w-6 bg-green-700 text-secondary rounded grid place-items-center"
                >
                  <div>A</div>
                </div>
                <div>Blīvēšana pēc pašreizējā tehnoloģiju stāvokļa</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import SectionHeading from "./SectionHeading.vue";
</script>
