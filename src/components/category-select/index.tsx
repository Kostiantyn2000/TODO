/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {configTaskCategory, configTaskCategoryOption} from '../../config';
import {TXT_BLACK} from '../../constants';
import {FC, useEffect, useState} from 'react';

interface IProps {
  setValue: (val: string) => void;
  value: string;
}

export const CategorySelect: FC<IProps> = ({setValue, value}) => {
  const [categoryActive, setCategoryActive] = useState<string>(value);

  const onChangeCategory = (label: string) => {
    setCategoryActive(label);
    setValue(label);
  };

  useEffect(() => {
    setValue(value);
    setCategoryActive('');
  }, [value]);

  return (
    <View style={styles.categoryWrapper}>
      <Text style={styles.title}>Category</Text>
      <View style={styles.categoryList}>
        {configTaskCategoryOption.map(({label, id}) => {
          return (
            <TouchableOpacity
              key={id}
              style={[
                styles.categoryItem,
                {
                  backgroundColor: configTaskCategory[`${label}`].color,
                  borderColor: categoryActive === label ? 'red' : '#fff',
                },
              ]}
              onPress={() => onChangeCategory(label)}>
              {configTaskCategory[`${label}`].icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginLeft: 24,
  },

  title: {
    color: TXT_BLACK,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 15.4,
  },

  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 2,
  },
});
