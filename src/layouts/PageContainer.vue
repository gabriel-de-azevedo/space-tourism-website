<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import PageContentLayout from './PageContentLayout.vue'
</script>

<template>
  <div>
    <NavigationHeader />
    <PageContentLayout>
      <slot />
    </PageContentLayout>
  </div>
</template>

<style scoped>
div {
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content 1fr;
  background-color: rgb(var(--clr-dark));
  color: rgb(var(--clr-white));
}
</style>
