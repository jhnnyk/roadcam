<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/washington">Washington</nuxt-link> >
      <nuxt-link to="/washington/roads">roads</nuxt-link> >
      {{ hwy }}
    </p>
    <h1 class="text-4xl p-4">Washington - {{ hwy }}</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="cam in cams" :key="cam.index" class="p-4">
        <nuxt-link
          :to="{ name: 'washington-roads-road-cam', params: { ...cam } }"
        >
          {{ cam.Title }}
          <img :src="cam.ImageURL" :alt="cam.Title" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import slugify from 'slugify'
import data from '../waroads.json'

export default {
  async fetch() {
    // filter cams for this hwy
    const filteredCams = await data.filter((cam) => {
      return (
        slugify(cam.CameraLocation.RoadName, {
          remove: /[*+~.()'"!/#:@]/g,
          lower: true,
        }) === this.$route.params.road
      )
    })

    // add slug for link
    const camsWithSlug = await filteredCams.map((cam) => {
      return {
        ...cam,
        cam: slugify(cam.Title, {
          remove: /[*+~.()'"!/#:@]/g,
          lower: true,
        }),
      }
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
