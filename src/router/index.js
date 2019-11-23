import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Example from './Example';
import SearchPage from '../SearchPage';
import SideBar from '../SideBar';

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: {
      headerTitle: 'Search',
      headerShown: false,
    },
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

const SettingsStack = createStackNavigator({
  Setting: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Setting',
    },
  },
  Profile: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
});

const MainDrawer = createDrawerNavigator(
  {
    SearchStack: SearchStack,
    Settings: SettingsStack,
  },
  {
    drawerType: 'front',
    contentComponent: SideBar,
  },
);

const App = createSwitchNavigator({
  Loading: {
    screen: MainDrawer,
  },
});

export default createAppContainer(App);
