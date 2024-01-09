<template>
  <div class="pt-4 pb-6">
    <h1 :class="color + ' font-bold text-2xl'"><slot/></h1>
    <hr :class="hrBorder" />
  </div>
</template>

<script setup>

const props = defineProps({
    color:String,
    hrBorder:String
})
</script>
