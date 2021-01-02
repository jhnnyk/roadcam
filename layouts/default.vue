<template>
  <div class="text-gray-700">
    <TitleBar />
    <div class="container">
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
