export interface ITask {
  id: string;
  title: string;
  level: ITaskLevel;
}
export enum ITaskLevel {
  HIGH = 'High',
  MID = 'Medium',
  EASY = 'Easy',
}
