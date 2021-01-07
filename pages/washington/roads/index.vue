<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/washington">Washington</nuxt-link> > roads
    </p>

    <h1 class="text-4xl p-4">Washington roads</h1>
    <ul
      v-if="orderedHwys"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <li v-for="hwy in orderedHwys" :key="hwy.index">
        <nuxt-link
          :to="{ name: 'washington-roads-road', params: { road: hwy.name } }"
        >
          {{ hwy.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
import slugify from 'slugify'
import data from '../roads/waroads.json'

export default {
  async fetch() {
    await data.forEach((cam) => {
      // add all cameras to local state
      this.allCams.push(cam)

      // create list of highways
      const hwyIndex = this.hwys.findIndex(
        (hwy) => hwy.name === slugify(cam.CameraLocation.RoadName)
      )

      if (hwyIndex === -1) {
        this.hwys.push({ name: slugify(cam.CameraLocation.RoadName) })
      }
    })
  },

  data() {
    return {
      allCams: [],
      hwys: [],
    }
  },

  computed: {
    orderedHwys() {
      return _.orderBy(this.hwys, 'name')
    },
  },
}
</script>
