<template>
  <div class="text-gray-700 text-center">
    <TitleBar />
    <div class="container mb-8">
      <MediaNet />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TitleBar from '~/components/TitleBar.vue'
import MediaNet from '~/components/MediaNet.vue'

export default {
  components: {
    TitleBar,
    MediaNet,
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
