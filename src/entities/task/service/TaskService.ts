import { ITask, ITaskLevel, SORTING_TYPES } from '../types';

class TaskService {
  get() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }
  save(tasks: ITask[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  sort(selectedSort: SORTING_TYPES, tasks: ITask[]) {
    const priorityOrder = {
      [ITaskLevel.HIGH]: 1,
      [ITaskLevel.MID]: 2,
      [ITaskLevel.EASY]: 3,
    };
    if (selectedSort === SORTING_TYPES.HIGH) {
      return [...tasks].sort((a, b) => {
        return priorityOrder[a.level] - priorityOrder[b.level];
      });
    }
    if (selectedSort === SORTING_TYPES.LOW) {
      return [...tasks].sort((a, b) => {
        return priorityOrder[b.level] - priorityOrder[a.level];
      });
    }
    return tasks;
  }
}

export const taskService = new TaskService();
