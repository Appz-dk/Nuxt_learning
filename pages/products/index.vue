<script lang="ts" setup>
  import type { TProduct } from '~/types/types';

  definePageMeta({
    layout: 'products'
  })

  const {data: products} = await useFetch<TProduct[]>('https://fakestoreapi.com/products')
</script>



<template>
  <h2 class="text-center">Products page</h2>
  <div class="grid grid-cols-1 gap-y-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <ProductCard v-for="product in products" :product="product"/>
  </div>
</template>



<style scoped>
  h2 {
    margin: 25px 0;
    font-size: 30px;
  }
</style>