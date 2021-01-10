<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/colorado">Colorado</nuxt-link> >
      <nuxt-link to="/colorado/roads">roads</nuxt-link> >
      {{ hwy }}
    </p>
    <h1 class="text-4xl p-4">Colorado - {{ hwy }}</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="cam in cams" :key="cam.index" class="p-4">
        <nuxt-link
          :to="{ name: 'colorado-roads-road-cam', params: { ...cam } }"
        >
          {{ cam.Name }}
          <div v-if="cam.CameraView[0]">
            <img
              :src="`https://www.cotrip.org/${cam.CameraView[0].ImageLocation}`"
              :alt="cam.CameraView[0].ViewDescription"
            />
            {{ cam.CameraView[0].CameraName }}
          </div>
          <div
            v-else-if="
              cam.CameraView.ImageLocation.indexOf('http://') === 0 ||
              cam.CameraView.ImageLocation.indexOf('https://') === 0
            "
          >
            <img
              :src="cam.CameraView.ImageLocation"
              :alt="cam.CameraView.ViewDescription"
            />
            {{ cam.CameraView.CameraName }}
          </div>
          <div v-else>
            <img
              :src="`https://www.cotrip.org/${cam.CameraView.ImageLocation}`"
              :alt="cam.CameraView.ViewDescription"
            />
            {{ cam.CameraView.CameraName }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import slugify from 'slugify'
import coTripData from '../../roads/coloradoroads.json'

export default {
  async fetch() {
    const filteredCams = await coTripData.Cameras.filter((cam) => {
      // find highway name
      let roadName = ''
      if (cam.CameraView[0]) {
        roadName = cam.CameraView[0].RoadName
      } else {
        roadName = cam.CameraView.RoadName
      }

      return (
        slugify(roadName, {
          remove: /[*+~.()'"!:@]/g,
          lower: true,
        }) === this.$route.params.road
      )
    })

    // add slug for link
    const camsWithSlug = await filteredCams.map((cam) => {
      return {
        ...cam,
        cam: slugify(cam.Name, {
          remove: /[*+~.()'"!:@]/g,
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
