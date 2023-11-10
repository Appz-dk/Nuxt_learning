<script lang="ts" setup>
  import type { TProduct } from '~/types/types';

  definePageMeta({
    layout: 'products'
  })

  const {data: products} = await useFetch<TProduct[]>('https://fakestoreapi.com/products')
</script>



<template>
  <h2>Products page</h2>
  <div class="grid grid-cols-4 gap-y-6 place-items-center">
    <ProductCard v-for="product in products" :product="product"/>
  </div>
</template>



<style scoped>
  h2 {
    margin: 25px 0;
    font-size: 30px;
  }
</style>