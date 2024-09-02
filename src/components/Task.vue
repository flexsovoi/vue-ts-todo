<template>
  <li class="task">
    <div class="task__title">{{ task.title }}</div>
    <div class="task__options">
      <div class="task__level">{{ task.level }}</div>
      <!--      <button class="task__edit">-->
      <!--        <img src="/assets/icons/editIcon.svg" alt="delete" />-->
      <!--      </button>-->
      <button class="task__delete" @click="taskStore.deleteTask(task.id)">
        <img src="/assets/icons/crossIcon.svg" alt="delete" />
      </button>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ITask } from '../types';
import { useTaskStore } from '../store/TaskStore.ts';

const taskStore = useTaskStore();
const props = defineProps<{
  task: ITask;
}>();
</script>

<style scoped lang="scss">
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  padding: 15px;
  &__options {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
