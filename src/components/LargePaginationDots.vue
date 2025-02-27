<template>
  <div class="flex">
    <button aria-selected="true" class="bg-dark text-white fs-500 ff-serif">1</button>
    <button class="bg-dark text-white fs-500 ff-serif">2</button>
    <button class="bg-dark text-white fs-500 ff-serif">3</button>
  </div>
</template>

<style scoped>
div > * {
  cursor: pointer;
  min-height: 2.5em;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid rgb(var(--clr-white) / 0.25);
  transition: var(--transition-short);
}

div > *:hover,
div > *:focus {
  border-color: rgb(var(--clr-white));
}

div > [aria-selected='true'] {
  background-color: rgb(var(--clr-white));
  color: rgb(var(--clr-dark));
}
</style>
