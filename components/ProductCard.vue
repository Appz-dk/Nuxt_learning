<script setup lang="ts">
  import type { TProduct } from '~/types/types';
  const { product } = defineProps({
    product: {
      type: Object as PropType<TProduct>,
      required: true
    }
  })

  const router = useRouter()
  const viewProductDetails = (productId: number) => {
    router.push(`/products/${productId}`)
  }
</script>



<template>
  <div class="card gap-6 w-80 flex flex-col items-center">
    <img class="object-contain max-h-36 rounded-md" :src="product.image"/>
    <h3 class="font-semibold line-clamp-2">{{ product.title }}</h3>
    <div class="mt-auto">
      <button class="btn" @click="viewProductDetails(product.id)">View Details</button>
    </div>
  </div>
</template>