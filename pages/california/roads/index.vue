<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/california">California</nuxt-link> > roads
    </p>
    <h1 class="text-4xl p-4">California roads</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="hwy in hwys" :key="hwy.index">
        <nuxt-link
          :to="{ name: 'california-roads-road', params: { road: hwy.name } }"
        >
          {{ hwy.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import slugify from 'slugify'
import data1 from '../roads/caroads1.json'
// import data2 from '../roads/caroads2.json'
// import data3 from '../roads/caroads3.json'
// import data4 from '../roads/caroads4.json'
// import data5 from '../roads/caroads5.json'
// import data6 from '../roads/caroads6.json'
// import data7 from '../roads/caroads7.json'
// import data8 from '../roads/caroads8.json'
// import data9 from '../roads/caroads9.json'
// import data10 from '../roads/caroads10.json'
// import data11 from '../roads/caroads11.json'
// import data12 from '../roads/caroads12.json'

export default {
  async fetch() {
    await data1.data.forEach((cam) => {
      // add all cameras to local state
      this.allCams.push(cam)

      // create list of highways
      const hwyIndex = this.hwys.findIndex(
        (hwy) => hwy.name === slugify(cam.route)
      )

      if (hwyIndex === -1) {
        this.hwys.push({ name: slugify(cam.route) })
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
