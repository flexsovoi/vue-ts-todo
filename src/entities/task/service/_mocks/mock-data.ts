import { ITask, ITaskLevel } from '../../types';

export const _task: ITask = {
  id: '1',
  title: 'test',
  level: ITaskLevel.HIGH,
  userId: 0,
  completed: false,
};
export const _tasks: ITask[] = [
  {
    id: '1',
    title: 'Task 1',
    level: ITaskLevel.EASY,
    completed: false,
    userId: 1,
  },
  {
    id: '2',
    title: 'Task 2',
    level: ITaskLevel.HIGH,
    completed: false,
    userId: 1,
  },
  {
    id: '3',
    title: 'Task 3',
    level: ITaskLevel.MID,
    completed: false,
    userId: 1,
  },
];
