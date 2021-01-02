<template>
  <div>
    <h1 class="text-4xl">Oregon - {{ hwy }}</h1>
    <ul class="grid grid-cols-4">
      <li v-for="cam in cams" :key="cam.index">
        <nuxt-link :to="{ name: 'oregon-roads-road-cam', params: { ...cam } }">
          {{ cam['device-name'] }}
          <img :src="cam['cctv-url']" :alt="cam['device-name']" />
          {{ cam['cctv-other'] }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import slugify from 'slugify'
import tripCheckData from '../oregonroads.json'

export default {
  async fetch() {
    // filter cams for this hwy
    const filteredCams = await tripCheckData.CCTVInventoryRequest.filter(
      (cam) => {
        return cam['route-id'].toLowerCase() === this.$route.params.road
      }
    )

    // add slug for link
    const camsWithSlug = await filteredCams.map((cam) => {
      return { ...cam, cam: slugify(cam['device-name']) }
    })

    this.cams = camsWithSlug
  },

  data() {
    return {
      cams: [],
      hwy: this.$route.params.road,
    }
  },
}
</script>
