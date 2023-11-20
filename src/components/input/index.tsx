import React, {FC} from 'react';
import {
  TextInput,
  ViewStyle,
  KeyboardTypeOptions,
  View,
  StyleSheet,
  TextStyle,
  Text,
} from 'react-native';
import {TXT_BLACK} from '../../constants';
interface IProps {
  placeholder?: string;
  value: string;
  placeholderTextColor?: string;
  onChange?: (value: string) => void;
  style?: ViewStyle | TextStyle;
  maxLength?: number;
  error?: string;
  styleError?: TextStyle;
  keyboardType?: KeyboardTypeOptions;
  onFocus?: () => void;
  onBlur?: () => void;
  label?: string;
  styleLabel?: TextStyle;
  inputProps?: Record<string, any>;
}
export const InputField: FC<IProps> = ({inputProps = {}, value, ...props}) => {
  const borderStyle = props.error ? styles.borderError : styles.border;
  const backgroundColor = value.length > 0 && !props.error && styles.background;

  return (
    <View style={styles.container}>
      {props.label ? (
        <Text style={[styles.label, props.styleLabel]}>{props.label}</Text>
      ) : null}
      <TextInput
        placeholder={props.placeholder}
        style={[styles.input, props.style, borderStyle, backgroundColor]}
        placeholderTextColor={props.placeholderTextColor}
        value={value}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChangeText={props.onChange}
        autoCapitalize="none"
        {...inputProps}
      />

      {props.error ? (
        <Text style={[styles.error, props.styleError]}>{props.error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    position: 'relative',
  },
  error: {
    color: '#EDA7E6',
    lineHeight: 13,
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: '#000',
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: TXT_BLACK,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 15.4,
    marginBottom: 8,
  },
  border: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  borderError: {
    borderWidth: 1,
    borderColor: 'red',
  },
  background: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
  },
});
