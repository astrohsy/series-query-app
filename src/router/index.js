import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack';

import Example from './Example';
import SearchPage from '../SearchPage';
import SideBar from '../SideBar';
import SearchDetailPage from '../SearchPage/SearchDetailPage';

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: {
      headerTitle: 'Search',
      headerShown: false,
    },
  },
  SearchDetails: {
    screen: SearchDetailPage,
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
  Home: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Home',
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
