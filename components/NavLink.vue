<script lang="ts" setup>
  const props = defineProps({
    to: {
      type: String,
      required: true
    },
  })

  const route = useRoute()
  const isActive = computed(() => route.path === props.to)
</script>

<template>
  <li>
    <NuxtLink 
    class="underline hover:underline-offset-2 hover:text-zinc-500 transition-color duration-150 ease-in-out" 
    :class="{ 'text-green-500': isActive }"
    :to="to">
      <slot />
    </NuxtLink>
  </li>
</template>