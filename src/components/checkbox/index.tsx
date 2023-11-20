import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {CheckIcon} from '../icons/check';

type TProps = {
  style?: StyleProp<ViewStyle>;
  value: boolean;
  onChange: () => void;
  color?: string;
};

export const CheckBox: React.FC<TProps> = ({value, style, onChange, color}) => {
  console.log(value);

  return (
    <TouchableOpacity
      style={[style, styles.wrapper, {backgroundColor: value ? color : '#fff'}]}
      onPress={onChange}>
      {value && <CheckIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#4A3780',
  },
});
