<template>
  <h2 class="subtitle">Tasks</h2>
  <TaskSorting />
  <TaskList />
</template>

<script setup lang="ts">
import TaskList from '../../widgets/TaskList/TaskList.vue';
import TaskSorting from '../../widgets/TaskSorting/TaskSorting.vue';
</script>

<style scoped>
.subtitle {
  font-size: 20px;
}
</style>
