import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {BACKGROUND_SECONDARY} from '../../constants';
import {ItemTask} from '../item-task';
import {useCallback} from 'react';
import {ITask} from '../../typings/interfaces/task';
import {useTaskStore} from '../../store';

export const ListTask = () => {
  const {filter} = useTaskStore();
  const tasks = useTaskStore(state => {
    switch (filter) {
      case 'done':
        return state.tasks.filter(it => it.isCompleted);
      case 'undone':
        return state.tasks.filter(it => !it.isCompleted);
      default:
        return state.tasks;
    }
  });
  const onToggleTask = useTaskStore(state => state.onToggleTask);
  const onDeleteTask = useTaskStore(state => state.onDeleteTask);

  const {height} = useWindowDimensions();

  const renderItem: ListRenderItem<ITask> = useCallback(
    ({item}) => {
      const {category, isCompleted, title, id} = item;
      return (
        <ItemTask
          taskName={title}
          category={category}
          isCheck={isCompleted}
          onChangeCheck={() => onToggleTask(id)}
          onDeleteTask={() => onDeleteTask(id)}
        />
      );
    },
    [onToggleTask, onDeleteTask],
  );

  const keyExtractor = useCallback((item: any) => `${item?.id}`, []);

  return (
    <View style={{flex: 1, height: height * 0.5}}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={[styles.container]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: BACKGROUND_SECONDARY,
    width: 358,
  },
});
