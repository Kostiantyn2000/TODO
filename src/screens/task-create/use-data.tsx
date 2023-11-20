import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {schema} from './validate';
import {useTaskStore} from '../../store';

const INIT_VALUE = {
  title: '',
  note: '',
  time: '',
  date: '',
  category: '',
};

export interface ITaskFrom {
  note?: string;
  title: string;
  date?: string;
  time?: string;
  category: any;
}

export const useData = () => {
  const onCreateTask = useTaskStore(state => state.onCreateTask);

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    setValue,
    getValues,
  } = useForm<ITaskFrom>({
    defaultValues: INIT_VALUE,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ITaskFrom) => {
    const idx = Math.floor(Math.random() * 1000);
    console.log('data', data);

    onCreateTask({...data, isCompleted: false, id: idx});
    reset();
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    reset,
    setValue,
    getValues,
  };
};
