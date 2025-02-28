<script setup lang="ts">
import { ref } from 'vue'

const isNavigationVisible = ref(false)

function toggleNavigationVisibility() {
  isNavigationVisible.value = !isNavigationVisible.value
}
</script>

<template>
  <header class="flex">
    <div>
      <img src="../assets/images/shared/logo.svg" alt="brand logo" />
    </div>
    <button
      aria-controls="primary-navigation"
      v-bind:aria-expanded="isNavigationVisible"
      v-on:click="toggleNavigationVisibility"
    >
      <span class="sr-only">Menu</span>
    </button>
    <nav>
      <ul
        id="primary-navigation"
        class="flex underlined-menu"
        v-bind:data-visible="isNavigationVisible"
      >
        <li class="active">
          <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/"
            ><span>00</span>Home</a
          >
        </li>
        <li>
          <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/destination"
            ><span>01</span>Destination</a
          >
        </li>
        <li>
          <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/crew"
            ><span>02</span>Crew</a
          >
        </li>
        <li>
          <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/technology"
            ><span>03</span>Technology</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul {
  --underline-gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  background: rgb(var(--clr-white) / 0.05);
  backdrop-filter: blur(3rem);
}

ul a {
  text-decoration: none;
}

ul a > span {
  font-weight: 700;
  margin-right: 0.5em;
}

button {
  display: none;
}

@media (max-width: 35rem) {
  ul {
    position: fixed;
    z-index: 800;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: min(20rem, 15vh) 2rem;
    margin: 0;
    --underline-gap: 0.5rem;
    list-style: none;
    transition: transform var(--transition-short);
  }

  ul[data-visible='false'] {
    transform: translateX(100%);
  }

  ul > .active {
    border: 0;
  }

  button {
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 900;
    right: 1rem;
    top: 2rem;
    border: 0;
    background: transparent;
    background-image: url(../assets/images/shared/icon-hamburger.svg);
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
  }

  button[aria-expanded='true'] {
    background-image: url(../assets/images/shared/icon-close.svg);
  }
}
</style>
