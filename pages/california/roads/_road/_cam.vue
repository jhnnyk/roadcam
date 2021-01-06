<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/california">California</nuxt-link> >
      <nuxt-link to="/california/roads">roads</nuxt-link> >
      <nuxt-link
        :to="{
          name: 'california-roads-road',
          params: { road: $route.params.road },
        }"
      >
        {{ $route.params.road }}
      </nuxt-link>
      > {{ cam.cctv.location.locationName }}
    </p>
    <h1 class="text-4xl p-4">{{ cam.cctv.location.locationName }}</h1>

    <img
      class="mx-auto"
      :src="cam.cctv.imageData.static.currentImageURL"
      :alt="cam.cctv.location.locationName"
    />
    <p>
      {{ cam.cctv.location.locationName }} on {{ cam.cctv.location.route }} near
      {{ cam.cctv.location.nearbyPlace }} in
      {{ cam.cctv.location.county }} county
    </p>
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
  async asyncData({ params }) {
    // create list of all cameras
    const allCams = []

    await data1.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data2.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data3.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data4.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data5.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data6.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data7.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data8.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data9.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data10.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data11.data.forEach((cam) => {
      allCams.push(cam)
    })
    await data12.data.forEach((cam) => {
      allCams.push(cam)
    })

    const cam = await allCams.find(
      (c) => slugify(c.cctv.location.locationName) === params.cam
    )
    return { cam }
  },
}
</script>
