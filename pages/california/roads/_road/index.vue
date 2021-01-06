<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/california">California</nuxt-link> >
      <nuxt-link to="/california/roads">roads</nuxt-link> >
      {{ hwy }}
    </p>
    <h1 class="text-4xl p-4">California - {{ hwy }}</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="cam in cams" :key="cam.index" class="p-4">
        <nuxt-link
          :to="{ name: 'california-roads-road-cam', params: { ...cam } }"
        >
          {{ cam.cctv.location.locationName }}
          <!-- <img
              :src="`https://www.cotrip.org/${cam.CameraView[0].ImageLocation}`"
              :alt="cam.CameraView[0].ViewDescription"
            />
            {{ cam.CameraView[0].CameraName }} -->
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import slugify from 'slugify'
import data1 from '../../roads/caroads1.json'
import data2 from '../../roads/caroads2.json'
import data3 from '../../roads/caroads3.json'
import data4 from '../../roads/caroads4.json'
import data5 from '../../roads/caroads5.json'
import data6 from '../../roads/caroads6.json'
import data7 from '../../roads/caroads7.json'
import data8 from '../../roads/caroads8.json'
import data9 from '../../roads/caroads9.json'
import data10 from '../../roads/caroads10.json'
import data11 from '../../roads/caroads11.json'
import data12 from '../../roads/caroads12.json'

export default {
  async fetch() {
    // create list of all cameras
    await data1.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data2.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data3.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data4.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data5.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data6.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data7.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data8.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data9.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data10.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data11.data.forEach((cam) => {
      this.allCams.push(cam)
    })
    await data12.data.forEach((cam) => {
      this.allCams.push(cam)
    })

    const filteredCams = await this.allCams.filter((cam) => {
      return slugify(cam.cctv.location.route) === this.$route.params.road
    })

    // add slug for link
    const camsWithSlug = await filteredCams.map((cam) => {
      return { ...cam, cam: slugify(cam.cctv.location.locationName) }
    })

    this.cams = camsWithSlug
  },

  data() {
    return {
      allCams: [],
      cams: [],
      hwy: this.$route.params.road,
    }
  },
}
</script>
