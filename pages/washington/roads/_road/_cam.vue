<template>
  <div>
    <p>
      <nuxt-link to="/">Home</nuxt-link> >
      <nuxt-link to="/washington">Washington</nuxt-link> >
      <nuxt-link to="/washington/roads">roads</nuxt-link> >
      <nuxt-link
        :to="{
          name: 'washington-roads-road',
          params: { road: $route.params.road },
        }"
      >
        {{ $route.params.road }}
      </nuxt-link>
      > {{ cam.Title }}
    </p>
    <h1 class="text-4xl p-4">{{ cam.Title }}</h1>
    <img :src="cam.ImageURL" :alt="cam.Title" class="mx-auto" />
    <p>{{ cam.Title }}</p>
  </div>
</template>

<script>
import slugify from 'slugify'
import data from '../../roads/waroads.json'

export default {
  async asyncData({ params }) {
    const cam = await data.find(
      (c) =>
        slugify(c.Title, {
          remove: /[*+~.()'"!:@]/g,
          lower: true,
        }) === params.cam
    )
    return { cam }
  },
}
</script>
