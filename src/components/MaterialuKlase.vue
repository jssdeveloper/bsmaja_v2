<template>
  <Container id="uznemums" class="text-primary">
    <SectionHeading color="text-primary" hrBorder="border-primary"
      >COMPACFOAM IR PIEEJAMS DAŽĀDĀS MATERIĀLU KLASĒS</SectionHeading
    >
    <section>
      <div>
        <h1 class="text-xl">
          CF materiālu klases galvenokārt atšķiras pēc spiedes stiprības,
          siltumvadītspējas un skrūvju noturības. Lai noteiktu optimālo
          materiālu klasi nepieciešamajam lietojumam, izmantojiet zemāk redzamo
          tabulu.
        </h1>
      </div>

      <!-- table -->
      <div class="py-6 relative overflow-x-auto">
      <table class="table-auto w-full ">
        <tr class="text-center">
          <td></td>
          <td>A</td>
          <td>A</td>
          <td>B</td>
          <td>C</td>
          <td>D</td>
          <td>E</td>
          <td>F</td>
          <td>G</td>
          <td>H</td>
          <td>I</td>
        </tr>
        <tr class="text-center font-medium text-xs">
          <td class="px-2 py-1 align-bottom">Materiālu<br />klase</td>
          <td class="border px-2 py-1 align-bottom">
            fc(ε=5,0%)<br />
            [N/mm2]
          </td>
          <td class="px-2 py-1 align-bottom">
            fc(ε=2,0%)<br />
            [N/mm2]
          </td>
          <td class="border px-2 py-1 align-bottom">
            E-modulis<br />
            [N/mm2]
          </td>
          <td class="px-2 py-1 align-bottom">
            σ zul<br />
            [N/mm2]
          </td>
          <td class="border px-2 py-1 align-bottom">
            λ<br />
            [W/mK]
          </td>
          <td class="px-6 py-1 align-bottom">µ[&#8722;]</td>
          <td class="border px-2 py-1 align-bottom">
            maks. H2O<br />absorbcija<br />
            [Vol%]
          </td>
          <td class="px-2 py-1 align-bottom">
            Uguns-<br />drošības<br />klasifikācija
          </td>
          <td class="border px-2 py-1 align-bottom">
            Pagarinājums pie<br />maksimālā spēka [%]
          </td>
          <td class="px-2 py-1 align-bottom">
            Galīgais šļūdes<br />ātrums [%]
          </td>
        </tr>

        <tr class="text-center text-xs border-t-2">
          <td class="px-2 py-1 align-center font-bold">
            <span class="italic">CF</span>
            <span class="text-orange-600 gap-2">100</span>
          </td>
          <td class="border px-2 py-1 align-center">1,4</td>
          <td class="px-2 py-1 align-center">0,8</td>
          <td class="border px-2 py-1 align-center">40</td>
          <td class="px-2 py-1 align-center">0,56</td>
          <td class="border px-2 py-1 align-center">0,0387</td>
          <td rowspan="7" class="px-6 py-1 align-center">25</td>
          <td rowspan="7" class="border px-2 py-1 align-center">~5</td>
          <td rowspan="7" class="px-2 py-1 align-center">E(B1)</td>
          <td class="border px-2 py-1 align-center">>10</td>
          <td rowspan="7" class="px-2 py-1 align-center">&#60;3,0</td>
        </tr>

        <tr class="text-center text-xs">
          <td class="px-2 py-1 align-center font-bold">
            <span class="italic">CF</span>
            <span class="text-orange-600 gap-2">125</span>
          </td>
          <td class="border px-2 py-1 align-center">1,65</td>
          <td class="px-2 py-1 align-center">1,1</td>
          <td class="border px-2 py-1 align-center">55</td>
          <td class="px-2 py-1 align-center">0,78</td>
          <td class="border px-2 py-1 align-center">0,0405</td>
          <td class="border px-2 py-1 align-center">>10</td>
        </tr>

        <tr class="text-center text-xs">
          <td class="px-2 py-1 align-center font-bold">
            <span class="italic">CF</span>
            <span class="text-orange-600 gap-2">150</span>
          </td>
          <td class="border px-2 py-1 align-center">1,9</td>
          <td class="px-2 py-1 align-center">1,32</td>
          <td class="border px-2 py-1 align-center">65</td>
          <td class="px-2 py-1 align-center">0,83</td>
          <td class="border px-2 py-1 align-center">0,0423</td>
          <td class="border px-2 py-1 align-center">>10</td>
        </tr>

        <tr class="text-center text-xs">
          <td class="px-2 py-1 align-center font-bold">
            <span class="italic">CF</span>
            <span class="text-orange-600 gap-2">200</span>
          </td>
          <td class="border px-2 py-1 align-center">3,5</td>
          <td class="px-2 py-1 align-center">1,48</td>
          <td class="border px-2 py-1 align-center">74</td>
          <td class="px-2 py-1 align-center">1,01</td>
          <td class="border px-2 py-1 align-center">0,0459</td>
          <td class="border px-2 py-1 align-center">>10</td>
        </tr>

        <tr class="text-center text-xs">
          <td class="px-2 py-1 align-center font-bold">
            <span class="italic">CF</span>
            <span class="text-orange-600 gap-2">300</span>
          </td>
          <td class="border px-2 py-1 align-center">6,4</td>
          <td class="px-2 py-1 align-center">3,21</td>
          <td class="border px-2 py-1 align-center">162</td>
          <td class="px-2 py-1 align-center">2,39</td>
          <td class="border px-2 py-1 align-center">0,0531</td>
          <td class="border px-2 py-1 align-center">>8</td>
        </tr>

        <tr class="text-center text-xs">
          <td class="px-2 py-1 align-center font-bold">
            <span class="italic">CF</span>
            <span class="text-orange-600 gap-2">400</span>
          </td>
          <td class="border px-2 py-1 align-center">9,7</td>
          <td class="px-2 py-1 align-center">4</td>
          <td class="border px-2 py-1 align-center">200</td>
          <td class="px-2 py-1 align-center">4,18</td>
          <td class="border px-2 py-1 align-center">0,0650</td>
          <td class="border px-2 py-1 align-center">>5</td>
        </tr>

        <tr class="text-center text-xs">
          <td class="px-2 py-1 align-center font-bold bg-slate-400">
            <span class="italic">CF</span>
            <span class="text-white gap-2">eco</span>
          </td>
          <td class="border px-2 py-1 align-center bg-slate-100">1,75</td>
          <td class="px-2 py-1 align-center bg-slate-100">0,95</td>
          <td class="border px-2 py-1 align-center bg-slate-100">46</td>
          <td class="px-2 py-1 align-center bg-slate-100">0,58</td>
          <td class="border px-2 py-1 align-center bg-slate-100">0,0450</td>
          <td class="border px-2 py-1 align-center bg-slate-100">>10</td>
        </tr>
      </table>
    </div>

    <!-- table description -->
    <div class="pt-6">
        <table class="table-auto w-full">
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">A</td>
                <td class="border px-2 py-1 bg-slate-100">Vidējais spriegums pie 5,0% / 2,0% deformācijas</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">B</td>
                <td class="border px-2 py-1 bg-slate-100">​Elastības modulis lineāri elastīgā diapazonā</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">C</td>
                <td class="border px-2 py-1 bg-slate-100">Ieteicamais sprieguma līmenis (pie darba slodzes)</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">D</td>
                <td class="border px-2 py-1 bg-slate-100">​Siltumvadītspējas koeficients</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">E</td>
                <td class="border px-2 py-1 bg-slate-100">​Ūdens tvaiku difūzijas pretestības koeficients</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">F</td>
                <td class="border px-2 py-1 bg-slate-100">Maksimālā ūdens absorbcijas spēja pilnīgas
                    iegremdēšanas laikā</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">G</td>
                <td class="border px-2 py-1 bg-slate-100">Materiāla īpašības pēc ugunsgrēka saskaņā ar DIN
                    4102-1 / EN 13501-1</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">H</td>
                <td class="border px-2 py-1 bg-slate-100">​Pagarinājums pie maksimālā spēka – maksimālā
                    deformācija pie atteices slodzes</td>
            </tr>
            <tr class="">
                <td class="border px-2 py-1 text-center bg-slate-100">I</td>
                <td class="border px-2 py-1 bg-slate-100">​Galīgais šļūdes ātrums – paredzamā ilgtermiņa
                    deformācija pie darbspējas robežstāvokļa</td>
            </tr>
        </table>
    </div>

    <!-- lower info -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
        <div>
            <h1 class="py-2 font-medium text-2xl">VIDES AIZSARDZĪBA UN DROŠĪBA</h1>
            <p class="font-light">COMPACFOAM ir 100% tīrs un neizdala fizioloģiski nozīmīgus ķīmisko vielu daudzumus. Parasti apstrādes
                laikā neveidojas kaitīgi putekļi vai tvaiki. COMPACFOAM ir iekļauts Vācijas Ilgtspējīgas būvniecības
                padomes (DGNB) sarakstā.</p>
        </div>

        <div>
            <h1 class="py-2 font-medium text-2xl">GLABĀŠANA UN TRANSPORTĒŠANA</h1>
            <p class="font-light">Uz šo produktu neattiecas Vācijas Rīkojums par bīstamām vielām (GefStoffV) vai citi glabāšanas un
                transportēšanas noteikumi.</p>
        </div>

    </div>
    </section>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import SectionHeading from "./SectionHeading.vue";
</script>
