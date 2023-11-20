import {CategoryTask} from '../enums';

export interface ITask {
  id: number;
  title: string;
  category: CategoryTask;
  date?: string;
  time?: string;
  note?: string;
  isCompleted: boolean;
}
