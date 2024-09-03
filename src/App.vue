<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import './app/styles/reset.css';
</script>

<style scoped lang="scss">
.title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

.wrapper {
  height: 100%;
  width: 100%;
  background: #222222;
  margin: 0 auto;
}
</style>
