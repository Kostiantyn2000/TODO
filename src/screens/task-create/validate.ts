import {object, string} from 'yup';

export const schema = object({
  title: string().required('required'),
  category: string().required('required'),
  time: string(),
  date: string(),
  note: string(),
});
