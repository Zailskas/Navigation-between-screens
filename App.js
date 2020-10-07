/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from './src/HomePage';
import SecondPage from './src/SecondPage';
import ThirdPage from './src/ThirdPage';
import firstTab from './src/TabNavigator.js/firstTab';
import secondTab from './src/TabNavigator.js/secondTab';
import firstDrawer from './src/DrawerNavigator/firstDrawer';
import secondDrawer from './src/DrawerNavigator/secondDrawer';
import countriesList from './src/countriesList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator initialRouteName="FirstDrawer">
      <Drawer.Screen name="FirstDrawer" component={firstDrawer} />
      <Drawer.Screen name="SecondDrawer" component={secondDrawer} />
    </Drawer.Navigator>
  );
};

const TabContainer = () => {
  return (
    <Tab.Navigator initialRouteName="FirstTab">
      <Tab.Screen name="FirstTab" component={firstTab} />
      <Tab.Screen name="SecondTab" component={secondTab} />
    </Tab.Navigator>
  );
};
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{title: 'Home page'}}
          />
          <Stack.Screen
            name="Second"
            component={TabContainer}
            options={{title: 'Second page'}}
          />
          <Stack.Screen name="ThirdPage" component={DrawerContainer} />
          <Stack.Screen name="countries" component={countriesList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
