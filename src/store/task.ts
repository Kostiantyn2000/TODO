import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {ITask} from '../typings/interfaces/task';

interface IAuthUserState {
  tasks: ITask[];
  filter: string;
  onCreateTask: (taskInfo: ITask) => void;
  onToggleTask: (idTask: number) => void;
  onDeleteTask: (idTask: number) => void;
  onFilterTask: (value: string) => void;
}

export const useTaskStore = create<IAuthUserState>()(
  immer((set, get) => ({
    tasks: [],
    filter: 'all',
    onCreateTask: (taskInfo: ITask) =>
      set(state => ({
        tasks: [...state.tasks, taskInfo],
      })),
    onToggleTask: (idTask: number) =>
      set(() => ({
        tasks: get().tasks.map(it =>
          it.id === idTask ? {...it, isCompleted: !it.isCompleted} : it,
        ),
      })),
    onDeleteTask: (id: number) =>
      set(() => ({
        tasks: get().tasks.filter(it => it.id !== id),
      })),
    onFilterTask: (value: string) =>
      set(() => ({
        filter: value,
      })),
  })),
);
