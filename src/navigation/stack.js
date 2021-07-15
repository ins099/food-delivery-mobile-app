import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import OrderScreen from '../screens/OrderScreen';
import Tabs from './tabs';

const stack = createStackNavigator();

const RootStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <stack.Screen name="Home" component={Tabs} />
      <stack.Screen name="Restaurant" component={RestaurantScreen} />
      <stack.Screen name="Order" component={OrderScreen} />
    </stack.Navigator>
  );
};

export default RootStack;
