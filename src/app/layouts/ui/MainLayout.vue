<template>
  <header>
    <RouterLink to="/">TODO: Home</RouterLink>
  </header>
  <div class="main-layout">
    <TaskNavbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import TaskNavbar from '../../../widgets/TaskNavbar/TaskNavbar.vue';
</script>

<style scoped lang="scss">
.main-layout {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
}

header {
  padding: 10px 100px;
}
</style>
