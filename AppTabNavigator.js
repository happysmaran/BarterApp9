import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import GetItemScreen from '../screens/GetItemScreen';
import ShareItemScreen from '../screens/ShareItemScreen';

export const AppTabNavigator = createBottomTabNavigator({
  GetItem : {
    screen: ShareItemScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Send.png")} style={{width:40, height:40}}/>,
      tabBarLabel : "Share Items",
    }
  },
  ShareItem: {
    screen: GetItemScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Receive.png")} style={{width:40, height:40}}/>,
      tabBarLabel : "Get Items",
    }
  },
  
});