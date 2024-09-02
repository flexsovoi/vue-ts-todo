<template>
  <form
    class="task-form"
    @submit.prevent="handleSubmit"
    v-if="taskStore.isCreate"
  >
    <div class="task-form__body">
      <input type="text" required name="taskName" />
      <select name="taskLevel">
        <option :value="level" v-for="level in ITaskLevel">
          {{ level }}
        </option>
      </select>
    </div>
    <div class="task-form__buttons">
      <button type="submit">Create</button>
      <button type="reset" @click="taskStore.setCreateMode(false)">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ITaskLevel } from '../types';
import { useTaskStore } from '../store/TaskStore.ts';

const taskStore = useTaskStore();

const handleSubmit = (e) => {
  const formData = new FormData(e.target);
  taskStore.addTask({
    title: formData.get('taskName'),
    level: formData.get('taskLevel'),
    id: Date.now(),
  });
  taskStore.setCreateMode(false);
};
</script>

<style scoped lang="scss">
.task-form {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  &__buttons {
    display: flex;
    gap: 15px;
  }
  &__body {
    display: flex;
    gap: 30px;
    input {
      border: 1px solid aliceblue;
      border-radius: 5px;
    }
    select {
      border-radius: 5px;
      height: 30px;
      border: 1px solid aliceblue;
    }
    option {
      background: transparent;
      color: #222222;
    }
  }
}
</style>
