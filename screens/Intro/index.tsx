import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert } from 'react-native'

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';

import BemVindo from './BemVindo';
import Cadastro from '../Cadastro';
import NotFoundScreen from '../NotFoundScreen';

import {AppMainStackParamList } from '../../types';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
        </NavigationContainer>
    );
  }


// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<AppMainStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BemVindo">
      <Stack.Screen name="BemVindo" component={BemVindo} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}