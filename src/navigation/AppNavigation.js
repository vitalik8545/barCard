import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {MainScreen} from '../screens/MainScreen';
import {ScreenFilter} from '../screens/ScreenFilter';

const Stack = createStackNavigator({
  Main: MainScreen,
  Filters: ScreenFilter,
});

export const AppNavigation = createAppContainer(Stack);
