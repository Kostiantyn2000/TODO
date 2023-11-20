import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BACKGROUND_SECONDARY, TXT_WHITE} from '../../constants';

interface HeaderProps {
  title: string;
  iconLeft?: JSX.Element;
  style?: {};
}

export const Header: FC<HeaderProps> = ({title, iconLeft, style}) => {
  return (
    <View style={[styles.container, style, {zIndex: 1, elevation: 1}]}>
      <View>
        {iconLeft ? <View style={styles.goBackItem}>{iconLeft}</View> : null}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.txt}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  txt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17.6,
    color: TXT_WHITE,
  },

  goBackItem: {
    width: 48,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_SECONDARY,
    borderRadius: 50,
  },

  hitSlopStyle: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
});
