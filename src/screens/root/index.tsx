import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../home';
import {RootKey} from '../../typings';
import {NavigationContainer} from '@react-navigation/native';
import {TaskCreateScreen} from '../task-create';

export type HomeStackParamList = {
  [RootKey.home]: undefined;
  [RootKey.taskCreate]: undefined;
};

const AppStack = createNativeStackNavigator<HomeStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={RootKey.home}>
        <AppStack.Screen name={RootKey.home} component={HomeScreen} />
        <AppStack.Screen
          name={RootKey.taskCreate}
          component={TaskCreateScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
