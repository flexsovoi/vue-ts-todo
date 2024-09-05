import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { $taskApi } from '../../api/taskApi';
import { taskService } from '../../service/TaskService';
import { ITask, ITaskLevel } from '../../types';
import { useTaskStore } from '../TaskStore';

vi.mock('../../service/TaskService');

const mockedTaskService = vi.mocked(taskService);

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('loads tasks from API if no tasks in storage', async () => {
    const store = useTaskStore();
    mockedTaskService.get.mockReturnValue([]);
    vi.spyOn($taskApi, 'get').mockResolvedValue({
      data: [
        {
          id: '1',
          title: 'Stored Task 1',
          completed: false,
          level: ITaskLevel.HIGH,
          userId: 0,
        },
        {
          id: '2',
          title: 'Stored Task 2',
          completed: true,
          level: ITaskLevel.HIGH,
          userId: 0,
        },
      ],
    });

    await store.applyTasks();
    expect(store.tasks).toHaveLength(2);
    expect(mockedTaskService.save).toHaveBeenCalledWith(store.tasks);
  });

  it('loads tasks from local storage if available', async () => {
    const store = useTaskStore();
    const storedTasks: ITask[] = [
      {
        id: '1',
        title: 'Stored Task 1',
        completed: false,
        level: ITaskLevel.HIGH,
        userId: 0,
      },
      {
        id: '2',
        title: 'Stored Task 2',
        completed: true,
        level: ITaskLevel.HIGH,
        userId: 0,
      },
    ];

    mockedTaskService.get.mockReturnValue(storedTasks);
    await store.applyTasks();
    expect(store.tasks).toEqual(storedTasks);
  });

  it('creates a new task and saves it', () => {
    const store = useTaskStore();
    const newTask: ITask = {
      id: '3',
      title: 'New Task',
      completed: false,
      level: ITaskLevel.MID,
      userId: 0,
    };

    store.createTask(newTask);
    expect(store.tasks).toContainEqual(newTask);
    expect(mockedTaskService.save).toHaveBeenCalledWith(store.tasks);
  });

  it('deletes a task by id and saves the state', () => {
    const store = useTaskStore();
    store.tasks = [
      {
        id: '1',
        title: 'Task 1',
        completed: false,
        level: ITaskLevel.HIGH,
        userId: 0,
      },
      {
        id: '2',
        title: 'Task 2',
        completed: true,
        level: ITaskLevel.MID,
        userId: 0,
      },
    ];
    store.deleteTask('1');
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0].id).toBe('2');
    expect(mockedTaskService.save).toHaveBeenCalledWith(store.tasks);
  });

  it('changes the task completion status and saves it', () => {
    const store = useTaskStore();

    store.tasks = [
      {
        id: '1',
        title: 'Task 1',
        completed: false,
        level: ITaskLevel.HIGH,
        userId: 0,
      },
    ];

    store.changeTaskValue('1', true);
    expect(store.tasks[0].completed).toBe(true);
    expect(mockedTaskService.save).toHaveBeenCalledWith(store.tasks);
  });

  it('changes create mode work correctly', () => {
    const store = useTaskStore();
    const myCreateMode = true;
    store.setCreateMode(myCreateMode);
    expect(store.isCreateMode).toEqual(myCreateMode);
  });
  it('getter completed tasks mode work correctly', async () => {
    const store = useTaskStore();
    mockedTaskService.get.mockReturnValue([]);
    const myTasks: ITask[] = [
      {
        id: '1',
        title: 'Task 1',
        completed: false,
        level: ITaskLevel.HIGH,
        userId: 0,
      },
      {
        id: '2',
        title: 'Task 2',
        completed: true,
        level: ITaskLevel.MID,
        userId: 0,
      },
    ];
    vi.spyOn($taskApi, 'get').mockResolvedValue({
      data: myTasks,
    });
    await store.applyTasks();
    const _filteredTasks = myTasks.filter((task) => task.completed);
    expect(store.getCompletedTasks).toEqual(_filteredTasks);
  });
});
