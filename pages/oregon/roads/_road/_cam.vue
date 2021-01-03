<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/oregon">Oregon</nuxt-link> >
      <nuxt-link to="/oregon/roads">roads</nuxt-link> >
      <nuxt-link
        :to="{
          name: 'oregon-roads-road',
          params: { road: cam['route-id'].toLowerCase() },
        }"
      >
        {{ cam['route-id'].toLowerCase() }}
      </nuxt-link>
      > {{ cam['device-name'] }}
    </p>
    <h1 class="text-4xl p-4">{{ cam['device-name'] }}</h1>
    <img :src="cam['cctv-url']" :alt="cam['device-name']" class="mx-auto" />
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
