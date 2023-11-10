<script lang="ts" setup>
  const route = useRoute()
  const productId = route.params.productId

  definePageMeta({
    layout: 'products'
  })
</script>



<template>
  <h2>Product details for {{ productId }}</h2>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid quam voluptas cupiditate? Sit facilis sapiente non velit illum culpa!</p>
</template>



<style scoped>
  h2 {
    margin: 25px 0;
    font-size: 30px;
  }
</style>