import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { AxiosResponse } from 'axios';
import { $taskApi } from '../api/taskApi';
import { taskService } from '../service/TaskService';
import { ITask, ITaskLevel, SORTING_TYPES } from '../types';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<ITask[]>([]);
  const isCreateMode = ref<Boolean>(false);
  const selectedSort = ref<SORTING_TYPES>(SORTING_TYPES.DEFAULT);

  const loadTasks = async () => {
    return await $taskApi
      .get(`/todos?userId=1`)
      .then((data: AxiosResponse<ITask[]>) => {
        const currentTasks = data.data.map((task) => {
          const levels = Object.values(ITaskLevel);
          const randomIndex = Math.floor(Math.random() * levels.length);
          task.level = levels[randomIndex];
          return task;
        });
        return currentTasks;
      });
  };

  const applyTasks = async () => {
    const storageTasks = localStorage.getItem('tasks');
    if (storageTasks) {
      const parseTasks: ITask[] = JSON.parse(storageTasks);
      tasks.value = [...parseTasks];
    } else {
      const userTasks = await loadTasks();
      tasks.value = [...userTasks];
      saveTasks();
    }
  };

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  };

  const createTask = (task: ITask) => {
    tasks.value.push(task);
    saveTasks();
  };

  const deleteTask = (id: string | number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    saveTasks();
  };

  const setCreateMode = (mode: boolean) => {
    isCreateMode.value = mode;
  };

  const getSortedTasks = () => {
    return taskService.sort(selectedSort.value, getUncompletedTasks.value);
  };
  const changeTaskValue = (id: string, value: boolean) => {
    const currentTask = tasks.value.find((task) => task.id === id);
    if (currentTask) {
      currentTask.completed = value;
      saveTasks();
    }
  };
  const getCompletedTasks = computed(() => {
    return tasks.value.filter((task) => task.completed);
  });

  const getUncompletedTasks = computed(() => {
    return tasks.value.filter((task) => !task.completed);
  });

  return {
    getSortedTasks,
    tasks,
    createTask,
    deleteTask,
    isCreateMode,
    setCreateMode,
    applyTasks,
    changeTaskValue,
    getCompletedTasks,
    getUncompletedTasks,
    selectedSort,
    saveTasks,
  };
});
