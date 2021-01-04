<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/colorado">Colorado</nuxt-link> >
      <nuxt-link to="/colorado/roads">roads</nuxt-link> >
      <nuxt-link
        :to="{
          name: 'colorado-roads-road',
          params: { road: $route.params.road },
        }"
      >
        {{ $route.params.road }}
      </nuxt-link>
      > {{ cam.Name }}
    </p>
    <h1 class="text-4xl p-4">{{ cam.Name }}</h1>
    <div v-if="cam.CameraView[0]">
      <div v-for="view in cam.CameraView" :key="view.index" class="mb-4">
        <p>{{ view.CameraName }} - {{ view.Direction }}</p>
        <img
          class="mx-auto"
          :src="`https://www.cotrip.org/${view.ImageLocation}`"
          :alt="view.ViewDescription"
        />
        {{ view.ViewDescription }}
      </div>
    </div>
    <div
      v-else-if="
        cam.CameraView.ImageLocation.indexOf('http://') === 0 ||
        cam.CameraView.ImageLocation.indexOf('https://') === 0
      "
    >
      <img
        class="mx-auto"
        :src="cam.CameraView.ImageLocation"
        :alt="cam.CameraView.ViewDescription"
      />
      {{ cam.CameraView.ViewDescription }}
    </div>
    <div v-else>
      <img
        class="mx-auto"
        :src="`https://www.cotrip.org/${cam.CameraView.ImageLocation}`"
        :alt="cam.CameraView.ViewDescription"
      />
      {{ cam.CameraView.ViewDescription }}
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import coTripData from '../../roads/coloradoroads.json'

export default {
  async asyncData({ params }) {
    const cam = await coTripData.Cameras.find(
      (c) => slugify(c.Name) === params.cam
    )
    return { cam }
  },
}
</script>
