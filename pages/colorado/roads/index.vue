<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/colorado">Colorado</nuxt-link> > roads
    </p>
    <h1 class="text-4xl p-4">Colorado roads</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="hwy in hwys" :key="hwy.index">
        <nuxt-link
          :to="{ name: 'colorado-roads-road', params: { road: hwy.name } }"
        >
          {{ hwy.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import slugify from 'slugify'
import coTripData from '../roads/coloradoroads.json'

export default {
  async fetch() {
    await coTripData.Cameras.forEach((cam) => {
      // add all cameras to local state
      this.allCams.push(cam)

      // find highway name
      let roadName = ''
      if (cam.CameraView[0]) {
        roadName = cam.CameraView[0].RoadName
      } else {
        roadName = cam.CameraView.RoadName
      }

      // create list of highways
      const hwyIndex = this.hwys.findIndex(
        (hwy) => hwy.name === slugify(roadName)
      )

      if (hwyIndex === -1) {
        this.hwys.push({ name: slugify(roadName) })
      }
    })
  },

  data() {
    return {
      allCams: [],
      hwys: [],
    }
  },
}
</script>
