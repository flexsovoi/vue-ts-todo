<template>
  <header>
    <RouterLink to="/">TODO: Home</RouterLink>
  </header>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-layout {
  max-width: 1200px;
  margin: 0 auto;
}
header {
  padding: 10px 100px;
}
</style>
