import {ScheduleIcon, SportIcon} from '../components';
import {CalendarIcon} from '../components/icons/calendar/index';
import {CategoryTask} from '../typings';

export const configTaskCategory = {
  [CategoryTask.sport]: {icon: <SportIcon />, color: '#FEF5D3'},
  [CategoryTask.calendar]: {icon: <CalendarIcon />, color: '#E7E2F3'},
  [CategoryTask.schedule]: {icon: <ScheduleIcon />, color: '#DBECF6'},
};

export const configTaskCategoryOption = [
  {label: CategoryTask.sport, id: 1},
  {label: CategoryTask.calendar, id: 2},
  {label: CategoryTask.schedule, id: 3},
];
