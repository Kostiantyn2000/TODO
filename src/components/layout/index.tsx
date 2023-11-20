import {FC, ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';

interface IProps {
  background: string;
  children: ReactNode;
  rerenderHeader: ReactNode;
}

export const Layout: FC<IProps> = ({background, children, rerenderHeader}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <View style={{width: '100%'}}>{rerenderHeader}</View>
      <View
        style={{
          width: '100%',
          height: '100%',

          backgroundColor: background,
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
};
