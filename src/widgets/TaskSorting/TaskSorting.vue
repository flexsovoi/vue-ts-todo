<template>
  <div class="sort">
    <span>Sorting</span>
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
</template>

<script setup lang="ts">
import { useTaskStore } from '../../entities/task/store/TaskStore';
import { SORTING_TYPES } from '../../entities/task/types';

const taskStore = useTaskStore();
</script>

<style scoped lang="scss">
.sort {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: 10px;
  span {
    padding: 0 5px;
  }
  select option {
    color: #222222;
  }
}
</style>
