import slugify from 'slugify'
import data1 from './pages/california/roads/caroads1.json'
import data2 from './pages/california/roads/caroads2.json'
import data3 from './pages/california/roads/caroads3.json'
import data4 from './pages/california/roads/caroads4.json'
import data5 from './pages/california/roads/caroads5.json'
import data6 from './pages/california/roads/caroads6.json'
import data7 from './pages/california/roads/caroads7.json'
import data8 from './pages/california/roads/caroads8.json'
import data9 from './pages/california/roads/caroads9.json'
import data10 from './pages/california/roads/caroads10.json'
import data11 from './pages/california/roads/caroads11.json'
import data12 from './pages/california/roads/caroads12.json'

const CACams = []

const getAllCACams = async () => {
  await data1.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data2.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data3.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data4.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data5.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data6.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data7.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data8.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data9.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data10.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data11.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
  await data12.data.forEach((cam) => {
    cam.camSlug =
      slugify(cam.cctv.location.route) +
      '/' +
      slugify(cam.cctv.location.locationName)
    CACams.push(cam)
  })
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'road.camera',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'traffic cameras and road webcams from across the USA',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    routes() {
      return getAllCACams().then(() => {
        return CACams.map((cam) => {
          return {
            route: '/california/roads/' + cam.camSlug,
            payload: cam,
          }
        })
      })
    },
  },
}
