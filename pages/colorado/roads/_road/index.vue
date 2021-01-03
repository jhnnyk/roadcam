<template>
  <div>
    <div class="mb-8">
      {{ $route.params }}
    </div>
    <div>{{ cams }}</div>
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

      return slugify(roadName) === this.$route.params.road
    })

    // add slug for link
    // const camsWithSlug = await filteredCams.map((cam) => {
    //   return { ...cam, cam: slugify(cam['device-name']) }
    // })

    this.cams = filteredCams
  },

  data() {
    return {
      cams: [],
    }
  },
}
</script>
