<script setup lang="ts">
import ExploreButton from '@/components/ExploreButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div>
      <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
        So you want to travel to <span class="block fs-900 ff-serif text-white">Space</span>
      </h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
    </div>
    <div>
      <ExploreButton />
    </div>
  </BaseLayout>
</template>

<style scoped>
.body {
  background-image: url(../assets/images/home/background-home-mobile.jpg);
}

@media (min-width: 35rem) {
  .body {
    background-position: center center;
    background-image: url(../assets/images/home/background-home-tablet.jpg);
  }
}

@media (min-width: 45em) {
  .body {
    background-image: url(../assets/images/home/background-home-desktop.jpg);
  }

  div {
    align-self: end;
  }
}
</style>
