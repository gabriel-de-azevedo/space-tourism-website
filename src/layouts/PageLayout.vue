<script setup lang="ts">
import NavigationHeader from '@/components/Header/NavigationHeader.vue'
</script>

<template>
  <div class="page-layout">
    <NavigationHeader />
    <div class="grid-container">
      <slot />
    </div>
  </div>
</template>

<style>
.page-layout {
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content 1fr;
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  line-height: 1.5;
  background-color: rgb(var(--clr-dark));
  color: rgb(var(--clr-white));
}

.grid-container {
  display: grid;
  text-align: center;
  place-items: center;
  padding-inline: 1rem;
}

.grid-container * {
  max-width: 50ch;
}

@media (min-width: 45em) {
  .grid-container {
    text-align: left;
    column-gap: var(--container-gap, 2rem);
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(1rem, 1fr);
  }

  .grid-container > *:first-child {
    grid-column: 2;
  }

  .grid-container > *:last-child {
    grid-column: 3;
  }
}
</style>
