<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- Slot in page content -->
  <main>
    <slot />
  </main>
</template>

<style scoped>
  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  }

  li > *:not(:first-child) {
    margin-left: 1rem;
  }

  a {
    text-underline-offset: 0.1em;
    transition: text-decoration-color 300ms, text-underline-offset 300ms;
  }

  a:hover {
    color: black;
    text-underline-offset: 0.2em
  }

  .router-link-active {
    color: green;
    text-decoration-color: black;
  }
</style>