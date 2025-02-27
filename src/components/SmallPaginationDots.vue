<template>
  <div class="flex">
    <button aria-selected="true">
      <span class="sr-only">Tab title</span>
    </button>
    <button>
      <span class="sr-only">Tab title</span>
    </button>
    <button>
      <span class="sr-only">Tab title</span>
    </button>
  </div>
</template>

<style scoped>
div > * {
  cursor: pointer;
  padding: 0.5em;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 0;
  background-color: rgb(var(--clr-white) / 0.25);
  transition: var(--transition-short);
}

div > *:hover,
div > *:focus {
  background-color: rgb(var(--clr-white) / 0.5);
}

div > [aria-selected='true'] {
  background-color: rgb(var(--clr-white) / 1);
}
</style>
