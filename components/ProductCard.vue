<script setup lang="ts">
  import type { VNodeRef } from 'vue';
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

  // Controll if product title needs a 'tooltip'
  const pTitle = ref<HTMLElement>()
  const productTitleTooltip = () => {
    // Comparing the scrollHeight and the clientHeight of the "clamped" element
    if (pTitle.value && pTitle.value.scrollHeight > pTitle.value.clientHeight) return pTitle.value.innerText
    return ""
  }

</script>



<template>
  <div class="card gap-6 w-72 flex flex-col items-center">
    <img class="object-contain max-h-36 rounded-md" :src="product.image"/>
    <h3 ref="pTitle" class="font-semibold line-clamp-2" :title="productTitleTooltip()">{{ product.title }}</h3>
    <div class="mt-auto">
      <button class="btn" @click="viewProductDetails(product.id)">View Details</button>
    </div>
  </div>
</template>