<template>
  <div class="text-gray-700 text-center">
    <TitleBar />
    <div class="container mb-8">
      <div id="285154539">
        <script type="text/javascript">
          try {
            window._mNHandle.queue.push(function () {
              window._mNDetails.loadTag('285154539', '300x250', '285154539')
            })
          } catch (error) {}
        </script>
      </div>
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
