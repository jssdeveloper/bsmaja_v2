<template>
  <NavBar2/>

  <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" key="router-view" />
      </transition>
    </router-view>

  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar2 from "@/components/layout/NavBar2.vue"
import Footer from "./components/Footer.vue";
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>