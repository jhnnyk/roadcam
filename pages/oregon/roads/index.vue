<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/oregon">Oregon</nuxt-link> > roads
    </p>

    <h1 class="text-4xl p-4">Oregon roads</h1>
    <ul
      v-if="orderedHwys"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <li v-for="hwy in orderedHwys" :key="hwy.index">
        <nuxt-link
          :to="{ name: 'oregon-roads-road', params: { road: hwy.name } }"
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
import tripcheckData from '../roads/oregonroads.json'

export default {
  async fetch() {
    await tripcheckData.CCTVInventoryRequest.forEach((cam) => {
      // add all cameras to local state
      this.allCams.push(cam)

      // create list of highways
      const hwyIndex = this.hwys.findIndex(
        (hwy) =>
          hwy.name ===
          slugify(cam['route-id'], {
            remove: /[*+~.()'"!:@]/g,
            lower: true,
          })
      )

      if (hwyIndex === -1) {
        this.hwys.push({
          name: slugify(cam['route-id'], {
            remove: /[*+~.()'"!:@]/g,
            lower: true,
          }),
        })
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
