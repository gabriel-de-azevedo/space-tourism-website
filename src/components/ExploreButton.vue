<template>
  <a href="#" class="ff-serif fs-600 uppercase bg-white text-dark">Explore</a>
</template>

<style scoped>
a {
  position: relative;
  display: inline-grid;
  place-items: center;
  aspect-ratio: 1;
  padding: 0 2em;
  border-radius: 50%;
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
    transform 400ms ease-in-out,
    opacity 100ms linear;
}

a:hover::after,
a:focus::after {
  transform: scale(1.5);
  opacity: 25%;
}
a:active:after {
  transform: scale(1);
}
</style>
