export interface ITask {
  id: string;
  title: string;
  level: ITaskLevel;
  userId: number;
  completed: boolean;
}
export enum ITaskLevel {
  HIGH = 'High',
  MID = 'Medium',
  EASY = 'Easy',
}
export enum SORTING_TYPES {
  DEFAULT = 'Default',
  LOW = 'Priority: low first',
  HIGH = 'Priority: high first',
}
