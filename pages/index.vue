<template>
  <div>
    <h1 class="text-4xl pt-4">
      Welcome to <nuxt-link :to="{ name: 'index' }">road.camera</nuxt-link>
    </h1>
    <p>Easily find webcams from all 50 states (coming soon)!</p>
    <h4 class="text-xl p-4">Currently featuring over 3,000 webcams from:</h4>
    <ul>
      <li>
        <h2 class="text-3xl">
          <nuxt-link to="/california">California</nuxt-link>
        </h2>
      </li>
      <li>
        <h2 class="text-3xl"><nuxt-link to="/colorado">Colorado</nuxt-link></h2>
      </li>
      <li>
        <h2 class="text-3xl"><nuxt-link to="/oregon">Oregon</nuxt-link></h2>
      </li>
      <li>
        <h2 class="text-3xl">
          <nuxt-link to="/washington">Washington</nuxt-link>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
