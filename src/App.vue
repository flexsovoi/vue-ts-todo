<template>
  <div class="wrapper">
    <main class="main">
      <h1 class="title">TODO</h1>
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
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import Task from './components/Task.vue';
import TaskForm from './components/TaskForm.vue';
import { SORTING_TYPES } from './constants';
import './reset.css';
import { useTaskStore } from './store/TaskStore';

const taskStore = useTaskStore();
const sortingTasks = computed(() => taskStore.getSortedTasks());
onMounted(() => {
  taskStore.applyTasks();
});
</script>

<style scoped lang="scss">
.sort {
  display: flex;
  justify-content: space-between;
  select option {
    color: #222222;
  }
}
.plus-btn {
  margin-top: 20px;
  align-self: center;
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
.title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
.subtitle {
  font-size: 20px;
}
.wrapper {
  height: 100%;
  width: 100%;
  background: #222222;
}
.main {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
