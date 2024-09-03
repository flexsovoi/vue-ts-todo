<template>
  <main class="main">
    <div class="sort">
      <h2 class="subtitle">Tasks</h2>
      <select v-model="taskStore.selectedSort">
        <option
          v-for="type in SORTING_TYPES"
          :value="type"
          :selected="type === taskStore.selectedSort"
          :key="type"
        >
          {{ type }}
        </option>
      </select>
    </div>
    <transition-group name="todo-list" tag="ul">
      <task :task="task" :key="task.id" v-for="task in sortingTasks" />
    </transition-group>
    <task-form />
    <button
      class="plus-btn"
      v-if="!taskStore.isCreate"
      @click="taskStore.setCreateMode(true)"
    >
      <img src="/assets/icons/plusIcon.svg" alt="plus" />
    </button>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { SORTING_TYPES } from '../shared/constants';
import { useTaskStore } from '../store/TaskStore';
import Task from './Task.vue';
import TaskForm from './TaskForm.vue';
const taskStore = useTaskStore();
const sortingTasks = computed(() => taskStore.getSortedTasks());
onMounted(() => {
  taskStore.applyTasks();
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
}
.subtitle {
  font-size: 20px;
}
.todo-list {
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
.sort {
  display: flex;
  justify-content: space-between;
  select option {
    color: #222222;
  }
}
</style>
