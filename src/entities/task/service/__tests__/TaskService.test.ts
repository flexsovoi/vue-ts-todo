import { describe, expect, it } from 'vitest';
import { ITaskLevel, SORTING_TYPES } from '../../types';
import { _task, _tasks } from '../_mocks/mock-data';
import { taskService } from '../TaskService';

describe('Task Service', () => {
  it('localstorage work correctly', () => {
    expect(taskService.get()).toEqual([]);
    taskService.save([_task]);
    const storageTasks = taskService.get();
    expect(storageTasks[0]).toEqual(_task);
  });

  it('sorts tasks by priority from high to low', () => {
    const sortedTasks = taskService.sort(SORTING_TYPES.HIGH, _tasks);

    expect(sortedTasks[0].level).toBe(ITaskLevel.HIGH);
    expect(sortedTasks[1].level).toBe(ITaskLevel.MID);
    expect(sortedTasks[2].level).toBe(ITaskLevel.EASY);
  });

  it('sorts tasks by priority from low to high', () => {
    const sortedTasks = taskService.sort(SORTING_TYPES.LOW, _tasks);
    expect(sortedTasks[0].level).toBe(ITaskLevel.EASY);
    expect(sortedTasks[1].level).toBe(ITaskLevel.MID);
    expect(sortedTasks[2].level).toBe(ITaskLevel.HIGH);
  });

  it('returns tasks as is if no valid sort type is provided', () => {
    const sortedTasks = taskService.sort(
      'invalid_sort' as SORTING_TYPES,
      _tasks,
    );

    expect(sortedTasks).toEqual(_tasks);
  });
});
