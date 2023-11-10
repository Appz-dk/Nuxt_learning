<template>
  <header class="container flex justify-between mx-auto p-4 shadow-sm">
    <NuxtLink class="font-bold custom-green" to="/"
    ><h1>Nuxt App</h1></NuxtLink>
    <nav>
      <ul class="flex gap-4">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/products">
          Products
        </NavLink>
      </ul> 
    </nav>
  </header>

  <!-- Slot in page content -->
  <main class="container mx-auto p-4">
    <slot />
  </main>
</template>

<style scoped>
  .custom-green {
    color: rgb(0, 220, 130)
  }
</style>