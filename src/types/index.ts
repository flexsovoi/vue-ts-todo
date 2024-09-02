export interface ITask {
    id: Date;
    title: string;
    level: ITaskLevel;
}
export enum ITaskLevel {
    HIGH = 'High',
    MID = 'Medium',
    EASY = 'Easy',
}
