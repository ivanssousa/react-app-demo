import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert, ColorSchemeName } from 'react-native'

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CadastroStackParamList } from '../../types';


import ObterCodigo from './ObterCodigo';
import ConfirmarCodigo from './ConfirmarCodigo';
import NotFoundScreen from '../NotFoundScreen';
import Cadastrar from './Cadastrar';

import CarregarIdentidade from './CarregarIdentidade';
import ConcluirCadastro from './ConcluirCadastro';
import IdentidadeCriada from './IdentidadeCriada';
import Info from './Info';

import User from '../User';



// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      independent={true}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}



// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<CadastroStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Registro" component={ObterCodigo} />
      <Stack.Screen name="ConfirmarCodigo" component={ConfirmarCodigo}/>
      <Stack.Screen name="Cadastrar" component={Cadastrar}/>
      <Stack.Screen name="CarregarIdentidade" component={CarregarIdentidade}/>
      <Stack.Screen name="ConcluirCadastro" component={ConcluirCadastro}/>
      <Stack.Screen name="IdentidadeCriada" component={IdentidadeCriada} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}