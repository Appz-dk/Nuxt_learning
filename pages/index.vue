<script lang="ts" setup>

  // Override global head settings
  useHead({
    title: "Homepage",
  })
</script>



<template>
  <h2>Home Page</h2>
  <p class="text-lg leading-relaxed text-gray-700">
    Welcome to my learning journey with Nuxt.js! This project showcases my exploration of Nuxt and its features. 
  </p>
  <p class="text-lg leading-relaxed text-gray-700">
    I setup some basic routing with the Home and About pages. These pages, while quite empty, serve as a practical exercise in navigating the framework.
  </p>
  <p class="text-lg leading-relaxed text-gray-700">
    On the Products page, I use Nuxt's dynamic routing. I fetch a collection of products from the fakestoreapi, using the useFetch method and manage page interactions using Nuxt.
  </p>
</template>



<style scoped>
  h2 {
    margin: 25px 0;
    font-size: 30px;
  }
</style>