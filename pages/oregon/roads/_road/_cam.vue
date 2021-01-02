<template>
  <div>
    <h1 class="text-4xl">{{ cam['device-name'] }}</h1>
    <img :src="cam['cctv-url']" :alt="cam['device-name']" />
    <p>{{ cam['cctv-other'] }}</p>
  </div>
</template>

<script>
import slugify from 'slugify'
import tripCheckData from '../../roads/oregonroads.json'

export default {
  async asyncData({ params }) {
    const cam = await tripCheckData.CCTVInventoryRequest.find(
      (c) => slugify(c['device-name']) === params.cam
    )
    return { cam }
  },
}
</script>
