<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
</script>

<template>
  <div class="body">
    <NavigationHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.body {
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content 1fr;
  background-color: rgb(var(--clr-dark));
  color: rgb(var(--clr-white));
  background-size: cover;
  background-position: bottom center;
}

main {
  display: grid;
  text-align: center;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 2rem;
}

main * {
  max-width: 50ch;
}

@media (min-width: 45em) {
  main {
    text-align: left;
    column-gap: 2rem;
    padding-bottom: max(6rem, 20vh);
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(1rem, 1fr);
  }

  main > *:first-child {
    grid-column: 2;
  }

  main > *:last-child {
    grid-column: 3;
  }
}
</style>
