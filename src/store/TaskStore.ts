import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SORTING_TYPES } from '../constants';
import { ITask, ITaskLevel } from '../types';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<ITask[]>([]);
  const isCreate = ref<Boolean>(false);
  const selectedSort = ref(SORTING_TYPES.default);

  const applyTasks = () => {
    const storageTasks = localStorage.getItem('tasks');
    if (storageTasks) {
      tasks.value = JSON.parse(storageTasks);
    }
  };

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  };

  const addTask = (task: ITask) => {
    tasks.value.push(task);
    saveTasks();
  };

  const deleteTask = (id: string | number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    saveTasks();
  };

  const setCreateMode = (mode: boolean) => {
    isCreate.value = mode;
  };

  const getSortedTasks = () => {
    const priorityOrder = {
      [ITaskLevel.HIGH]: 1,
      [ITaskLevel.MID]: 2,
      [ITaskLevel.EASY]: 3,
    };
    if (selectedSort.value === SORTING_TYPES.high) {
      return [...tasks.value].sort((a, b) => {
        return priorityOrder[a.level] - priorityOrder[b.level];
      });
    }
    if (selectedSort.value === SORTING_TYPES.low) {
      return [...tasks.value].sort((a, b) => {
        return priorityOrder[b.level] - priorityOrder[a.level];
      });
    }
    return tasks.value;
  };

  return {
    getSortedTasks,
    tasks,
    addTask,
    deleteTask,
    isCreate,
    setCreateMode,
    applyTasks,
    selectedSort,
    saveTasks,
  };
});
