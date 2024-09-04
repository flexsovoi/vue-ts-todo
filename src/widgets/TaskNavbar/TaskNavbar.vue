<template>
  <nav class="nav-bar">
    <router-link to="/tasks">ToDo</router-link>
    <router-link to="/tasks/completed">Completed</router-link>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-bar {
  margin-top: 50px;
  display: flex;
  align-self: center;
  gap: 15px;
}
</style>
