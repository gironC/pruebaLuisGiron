import React from 'react';
import {Image, Pressable, StatusBar} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Variables from './src/variables/index';
import Tipocambio from './src/tipocambio/index';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName ='money-bill-alt';
          if (route.name === 'Variables') {iconName = 'reader-outline'}
          else if (route.name === 'Tipocambio') {iconName = 'bar-chart-outline'}
          return <Ionicons name={iconName} size={20} color={color}/>;
        },
        tabBarActiveTintColor: '#003366',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name='Variables' component={Variables} options={{headerShown: false}} />
        <Tab.Screen name='Tipocambio' component={Tipocambio} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
