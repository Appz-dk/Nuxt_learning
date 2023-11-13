<script setup lang="ts">
  // useError would only allow me to use .message without typeScript errors.
  // And setting it as type Error also did not fix my issues.
  // So created this TError with the info from the docs
  type TError = {
    url: string
    statusCode: number
    statusMessage: string
    message: string
    description?: string
    data?: any
    stack?: string // Should only be set during development (not sure though)
  }

  defineProps({
    error: {
      type: Object as PropType<TError>,
    }
  })

  const onClearError = () => {
    clearError({ redirect: "/" })
  }

</script>



<template>
  <main class="h-screen grid place-items-center">
    <div class="card text-center mx-auto max-w-sm !h-fit">
      <h1 class="text-4xl font-bold my-2">{{ error?.statusCode }}</h1>
      <p class="text-lg my-2">Something went wrong...</p>
      <p class="my-2 text-red-600">{{ error?.message }}</p>
      <button @click="onClearError" class="btn my-2">Back to Home</button>
    </div>
  </main>
</template>