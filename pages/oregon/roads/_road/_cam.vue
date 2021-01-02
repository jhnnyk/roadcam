<template>
  <div>
    {{ $route.params }}
    <h1 class="text-4xl">{{ $route.params['device-name'] }}</h1>
    <img :src="$route.params['cctv-url']" :alt="$route.params['device-name']" />
    <p>{{ $route.params['cctv-other'] }}</p>
  </div>
</template>
