<template>
  <main class="main">
    <transition-group name="todo-list" tag="ul" class="todo-list">
      <task
        :task="task"
        :key="task.id.toString()"
        v-for="task in sortingTasks"
      />
    </transition-group>
    <task-form />
    <button
      class="plus-btn"
      v-if="!taskStore.isCreateMode"
      @click="taskStore.setCreateMode(true)"
    >
      <img src="/assets/icons/plusIcon.svg" alt="plus" />
    </button>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTaskStore } from '../../entities/task/store/TaskStore';
import Task from '../Task/Task.vue';
import TaskForm from '../TaskForm/TaskForm.vue';

const taskStore = useTaskStore();
const route = useRoute();
const sortingTasks = computed(() => {
  if (route.path.includes('completed')) {
    return taskStore.getCompletedTasks;
  }
  return taskStore.getSortedTasks();
});
onMounted(() => {
  console.log();
  taskStore.applyTasks();
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
}

.todo-list {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
.plus-btn {
  margin-top: 20px;
  align-self: center;
}
</style>
