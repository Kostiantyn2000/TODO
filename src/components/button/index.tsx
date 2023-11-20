import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {BACKGROUND_BTN_PRIMARY} from '../../constants';

interface IProps {
  textContent: string;
  onPress: () => void;
  textStyle?: TextStyle;
  style?: ViewStyle;
  isDisabled?: boolean;
}

export const Button: FC<IProps> = ({...props}) => {
  return (
    <TouchableOpacity
      disabled={props.isDisabled}
      onPress={props.onPress}
      style={[styles.container, props.style]}>
      <Text>{props.textContent}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: BACKGROUND_BTN_PRIMARY,
  },
  txt: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
});
