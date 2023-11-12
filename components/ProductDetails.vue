<script setup lang="ts">
  import type { TProduct } from '~/types/types';

  const { product } = defineProps({
    product: {
      type: Object as PropType<TProduct>,
      required: true
    }
  })

  
</script>

<template>
  <div class="card max-w-6xl mx-auto grid grid-rows-2 place-items-center md:grid-cols-2 md:grid-rows-1 md:gap-x-16">
    <div class="p-7 max-w-md">
      <img class="object-contain max-h-60 md:max-h-96" :src="product.image" alt="Image of product"/>
    </div>
    <div class="p-7 flex flex-col gap-4">
      <h2 class="text-lg font-semibold md:text-3xl">{{ product.title }}</h2>
      <div class="flex gap-2 md:text-lg">
        <span>Price:</span>
        <span>${{ product.price }}</span>
      </div>
      <div class="text-sm sm:text-base">
        <p class="font-bold mb-2 border-b-2 pb-1">Product description</p>
        <p class="block">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>