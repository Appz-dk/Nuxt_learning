<script lang="ts" setup>
  import type { TProduct } from '~/types/types';

  definePageMeta({
    layout: 'products'
  })

  const {data: products} = await useFetch<TProduct[]>('https://fakestoreapi.com/products')

  const router = useRouter()
  const viewProductDetails = (productId: number) => {
    router.push(`/products/${productId}`)
  }
</script>



<template>
  <h2>Products page</h2>
  <div class="grid grid-cols-4 gap-y-6 place-items-center">
    <div v-for="product in products" class="p-4 h-80 w-80 bg-white rounded-md gap-4 flex flex-col items-center">
      <img class="object-contain max-h-36 rounded-md" :src="product.image"/>
      <h3 class="font-semibold line-clamp-2">{{ product.title }}</h3>
      <div class="mt-auto">
        <button class="btn" @click="viewProductDetails(product.id)">View Details</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
  h2 {
    margin: 25px 0;
    font-size: 30px;
  }
</style>