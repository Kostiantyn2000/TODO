import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {CheckBox} from '../checkbox';
import {FC} from 'react';
import {TXT_BLACK} from '../../constants';
import {configTaskCategory} from '../../config';
import {CategoryTask} from '../../typings';
import {TrashIcon} from '../icons';

interface IProps {
  taskName: string;
  isCheck: boolean;
  date?: string;
  note?: string;
  category: CategoryTask.calendar | CategoryTask.sport | CategoryTask.schedule;
  onChangeCheck: () => void;
  onDeleteTask: () => void;
}

export const ItemTask: FC<IProps> = ({
  taskName,
  isCheck,
  date,
  onChangeCheck,
  category,
  onDeleteTask,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.wrapper, {width: width * 0.9}]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          opacity: isCheck ? 0.5 : 1,
        }}>
        <View
          style={[
            styles.itemCircle,
            {
              backgroundColor: category
                ? configTaskCategory[`${category}`].color
                : '#E7E2F3',
            },
          ]}>
          {configTaskCategory[`${category}`].icon}
        </View>
        <View style={{marginLeft: 12}}>
          <Text style={styles.textName}>{taskName}</Text>
          <Text style={styles.textDate}>{date}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox color="#4A3780" value={isCheck} onChange={onChangeCheck} />
        <TouchableOpacity onPress={onDeleteTask} style={{marginLeft: 10}}>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  border: {
    borderBottomColor: '#194A66',
    borderWidth: 1,
    borderTopColor: '#194A66',
  },

  itemCircle: {
    borderRadius: 50,
    width: 48,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textName: {
    color: TXT_BLACK,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17.6,
  },
  textDate: {
    color: TXT_BLACK,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    opacity: 1,
  },
});
