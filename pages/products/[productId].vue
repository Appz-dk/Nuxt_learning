<script lang="ts" setup>
  import type { TProduct } from '~/types/types';

  const route = useRoute()
  const productId = route.params.productId

  definePageMeta({
    layout: 'products'
  })

  const url = `https://fakestoreapi.com/products/${productId}`
  const {data: product, pending} = useFetch<TProduct>(url)
</script>



<template >
  <div v-if="pending">
    <h2>Loading product...</h2>
  </div>
  <div v-else-if="product">
    <h2>Product details for {{ product.id }}</h2>
    <p>{{ product.description }}</p>
  </div>
  <div v-else>
    <h2>Sorry we could not find your product...</h2>
  </div>
  </template>



<style scoped>
  h2 {
    margin: 25px 0;
    font-size: 30px;
  }
</style>