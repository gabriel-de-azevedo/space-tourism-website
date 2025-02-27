<script setup lang="ts">
import ExploreButton from '@/components/ExploreButton.vue'
import PageLayout from '@/layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <div class="grid-column">
      <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
        So you want to travel to <span class="block fs-900 ff-serif text-white">Space</span>
      </h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
    </div>
    <div class="grid-column">
      <ExploreButton />
    </div>
  </PageLayout>
</template>

<style scoped>
@media (min-width: 45em) {
  .grid-column {
    padding-bottom: max(6rem, 20vh);
    align-self: end;
  }
}
</style>
