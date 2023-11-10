<template>
  <header>
    <nav>
      <NuxtLink class="logo-link" to="/products"><h1>My Logo</h1></NuxtLink>
      <ul>
        <li>
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          <NuxtLink class="nav-link" to="/products">Products</NuxtLink>
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

  .nav-link {
    text-underline-offset: 0.1em;
    transition: text-decoration-color 300ms, text-underline-offset 300ms;
  }

  .nav-link:hover {
    color: black;
    text-underline-offset: 0.2em
  }

  .router-link-active {
    color: green;
    text-decoration-color: black;
  }

  .logo-link {
    text-decoration: none;
    color: black
  }
</style>