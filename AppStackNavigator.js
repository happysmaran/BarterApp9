import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ShareItemScreen from '../screens/ShareItemScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  ShareItemList : {
    screen : ShareItemScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'ShareItemList'
  }
);