<template>
  <a href="#" class="ff-serif uppercase bg-white text-dark">Explore</a>
</template>

<style scoped>
a {
  position: relative;
  display: inline-grid;
  place-items: center;
  padding: 2em;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: var(--fs-600);
  text-decoration: none;
}

a::after {
  position: absolute;
  content: '';
  min-width: 100%;
  min-height: 100%;
  border-radius: inherit;
  opacity: 0;
  background: rgb(var(--clr-white));
  transition:
    opacity var(--transition-short),
    transform var(--transition-long);
}

a:hover::after,
a:focus::after {
  transform: scale(1.5);
  opacity: 25%;
}
a:active:after {
  transform: scale(1);
}

@media (min-width: 35rem) {
  a {
    font-size:;
  }
}
</style>
