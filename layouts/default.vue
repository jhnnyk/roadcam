<template>
  <div class="text-gray-700 text-center">
    <TitleBar />
    <div class="container mb-8">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TitleBar from '~/components/TitleBar.vue'

export default {
  components: {
    TitleBar,
  },
}
</script>

<style lang="postcss">
a {
  @apply text-blue-800;
  &:hover {
    @apply underline;
  }
}
</style>
