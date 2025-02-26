<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style>
body {
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  background-color: rgb(var(--clr-dark));
  color: rgb(var(--clr-white));
}
</style>
