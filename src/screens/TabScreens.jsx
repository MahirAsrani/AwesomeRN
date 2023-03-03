import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './Profile';
import MyDrawer from './drawer';
import HomeScreen from './home';
import CartScreen from './CartScreen';
const Tab = createBottomTabNavigator();

function MyTabsScreen({route, navigation}) {
  const {user} = route.params;

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Dashboard" component={MyDrawer} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default MyTabsScreen;
