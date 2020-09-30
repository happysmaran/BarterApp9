import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyBarterScreen from '../screens/MyBarterScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyBarters : {
    screen : MyBarterScreen
  },
  Notification : {
    screen : NotificationScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
