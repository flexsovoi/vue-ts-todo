<template>
  <li class="task">
    <div class="task__title">
      <MyCheckbox
        :checked="task.completed"
        :click-function="
          () => taskStore.changeTaskValue(task.id, !task.completed)
        "
      />
      <div v-if="!isEditMode">{{ task.title }}</div>
      <div class="task__edit" v-if="isEditMode">
        <my-input v-model="task.title" />
        <button @click="saveChanges">Save</button>
        <button @click="cancelChanges">Cancel</button>
      </div>
    </div>
    <div class="task__options">
      <div class="task__level">{{ task.level }}</div>
      <button class="task__edit" @click="toggleEditMode" v-if="!isEditMode">
        <img src="/assets/icons/editIcon.svg" alt="delete" />
      </button>
      <button class="task__delete" @click="taskStore.deleteTask(task.id)">
        <img src="/assets/icons/crossIcon.svg" alt="delete" />
      </button>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { useTaskStore } from '../../entities/task/store/TaskStore';

import { ITask } from '../../entities/task/types';
import MyCheckbox from '../../shared/ui/MyCheckbox.vue';
import MyInput from '../../shared/ui/MyInput.vue';

defineProps<{
  task: ITask;
}>();

const taskStore = useTaskStore();

const isEditMode = ref<boolean>(false);
const inputRef = ref<null | HTMLInputElement>(null);
const toggleEditMode = () => {
  isEditMode.value = !isEditMode.value;
  inputRef.value?.focus();
};
const saveChanges = () => {
  taskStore.saveTasks();
  toggleEditMode();
};
const cancelChanges = () => {
  taskStore.applyTasks();
  toggleEditMode();
};
</script>

<style scoped lang="scss">
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  padding: 15px;
  &__title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
  }
  &__options {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__edit {
    display: flex;
    gap: 20px;
    button {
      border: 1px solid aliceblue;
      border-radius: 5px;
      padding: 5px;
    }
  }
}
</style>
