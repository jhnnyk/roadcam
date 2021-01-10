<template>
  <div class="text-gray-700 text-center">
    <TitleBar />
    <div class="container mb-8">
      <div
        class="_fa7cdd4c68507744"
        data-zone="4b0fc271a7f04f37a3078af0f7f7489a"
        style="
          width: 320px;
          height: 100px;
          display: inline-block;
          margin: 0 auto;
        "
      ></div>
      <div
        class="_fa7cdd4c68507744"
        data-zone="9a903770e0e04138a43b210f1a96ce0e"
        style="
          width: 320px;
          height: 100px;
          display: inline-block;
          margin: 0 auto;
        "
      ></div>
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
