<template>
  <header class="flex justify-between mx-auto p-4 shadow-sm bg-white">
    <NuxtLink class="font-bold custom-green" to="/"
    ><h1>Nuxt App</h1></NuxtLink>
    <nav>
      <ul class="flex items-center gap-4">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <li>
          <NuxtLink to="/products" class="btn">Products</NuxtLink>
        </li>
      </ul> 
    </nav>
  </header>

  <!-- Slot in page content -->
  <main class="mx-auto p-8">
    <slot />
  </main>
</template>