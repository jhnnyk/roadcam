<template>
  <div>
    <h1 class="text-4xl">{{ hwy }}</h1>
    <ul>
      <li v-for="cam in cams" :key="cam.index">
        {{ cam['device-name'] }}
        <img :src="cam['cctv-url']" :alt="cam['device-name']" />
        {{ cam['cctv-other'] }}
      </li>
    </ul>
  </div>
</template>

<script>
import tripCheckData from '../oregon/oregonroads.json'

export default {
  async fetch() {
    const filteredCams = await tripCheckData.CCTVInventoryRequest.filter(
      (cam) => {
        return cam['route-id'].toLowerCase() === this.$route.params.road
      }
    )

    this.cams = filteredCams
  },

  data() {
    return {
      cams: [],
      hwy: this.$route.params.road,
    }
  },
}
</script>
