<template>
  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  display: grid;
  text-align: center;
  place-items: center;
  padding-inline: 1rem;
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
