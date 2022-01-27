import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import TabOneScreen from '../../screens/TabOneScreen';
import TabTwoScreen from '../../screens/TabTwoScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';


import Definicoes from './Definicoes/index';
import Transferencia from './Transferencia/index';
import Home from './Home/index';
import MeusDados from './MeusDados/index';
import ProvaEfectuada from './ProvaEfectuada/index';
import ProvaVidaExecutar from './ProvaVidaExecutar/index';

import { 
  UserBottomTabParamList, 
  ProvaVidaParamList, 
  MeusDocumentosParamList, 
  MeusDadosParamList, 
  DefinicoesParamList, 
  HomeParamList  
} from '../../types';



const BottomTab = createBottomTabNavigator<UserBottomTabParamList>();

export default function BottomTabNavigator() {

  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      screenOptions={ ({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          size = 33;
          let iconName;

          if( focused )
            size = 40;

          if ( route.name === 'ProvaVida' ) {
            iconName = 'albums-sharp';
          }
          else if ( route.name === 'Home' ) {
            iconName = 'home-outline';
          }
          else if( route.name == 'MeusDados') {
            iconName = 'man-outline';
          }
          else if ( route.name == 'Transferencia' ) {
            iconName = 'md-navigate-outline';
          }
          else if ( route.name == 'Definicoes') {
            iconName = 'cog-outline';
          }
          else{
            iconName = 'ios-information-circle';
          }
          return <Ionicons style={{ marginBottom: -3 }} size={size} color={color} name={iconName}  />;
        }
      })}
    >

      <BottomTab.Screen
          name="ProvaVida"
          component={TabProvaVidaNavigator}
        />

      <BottomTab.Screen
          name="MeusDados"
          component={TabMeusDadosNavigator}
        />

      <BottomTab.Screen
        name="Home"                
        component={TabHomeNavigator}
      />


      <BottomTab.Screen
        name="Transferencia"
        component={TabTransferenciaNavigator}
      />

      <BottomTab.Screen
        name="Definicoes"
        component={TabDefinicoesNavigator}
      />


    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
//function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
//}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab




const TabProvaVidaExecutarStack = createStackNavigator<DefinicoesParamList>();

function TabProvaVidaExecutarNavigator() {
  return (
    <TabProvaVidaExecutarStack.Navigator>
      <TabProvaVidaExecutarStack.Screen
        name="Index"
        component={ProvaVidaExecutar}
        options={{ 
          headerShown: false,
          headerTitle: 'Executar Prova de Vida', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />
    </TabProvaVidaExecutarStack.Navigator>
  );
}
 


const TabProvaVidaStack = createStackNavigator<ProvaVidaParamList>();

function TabProvaVidaNavigator() {
  return (
    <TabProvaVidaStack.Navigator>
      <TabProvaVidaStack.Screen
        name="Index"
        component={ProvaEfectuada}
        options={{ 
          headerShown: false,
          headerTitle: 'Provas Efectuadas', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />

      <TabProvaVidaStack.Screen
        name="ExecutarProvaVida"
        component={TabProvaVidaExecutarNavigator}
        options={{ 
          headerShown: false,
          headerTitle: 'Executar Prova de Vida', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />

    </TabProvaVidaStack.Navigator>
  );
}

const TabHomeStack = createStackNavigator<HomeParamList>();
  

function TabHomeNavigator()
{
  return (
    <TabHomeStack.Navigator>
      
      <TabHomeStack.Screen
        name="Index"
        component={Home}
        options={{ 
          headerShown: false,
          headerTitle: 'BCS Banking', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />

      <TabHomeStack.Screen
        name="ExecutarProvaVida"
        component={TabProvaVidaExecutarNavigator}
        options={{ 
          headerShown: false,
          headerTitle: 'Executar Prova de Vida', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />

    </TabHomeStack.Navigator>
  );
}


const TabMeusDadosStack = createStackNavigator<MeusDadosParamList>();

function TabMeusDadosNavigator() {
  return (
    <TabMeusDadosStack.Navigator>
      <TabMeusDadosStack.Screen
        name="Index"
        component={MeusDados}
        options={{ 
          headerShown: false,
          headerTitle: 'Meus Dados', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />
    </TabMeusDadosStack.Navigator>
  );
}

const TabTransferenciaStack = createStackNavigator<MeusDocumentosParamList>();

function TabTransferenciaNavigator() {
  return (
    <TabTransferenciaStack.Navigator>
      <TabTransferenciaStack.Screen
        name="Index"
        component={Transferencia}
        options={{ 
          headerShown: false,
          headerTitle: 'Meus Documentos', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />
    </TabTransferenciaStack.Navigator>
  );
}



const TabDefinicoesStack = createStackNavigator<DefinicoesParamList>();

function TabDefinicoesNavigator() {
  return (
    <TabDefinicoesStack.Navigator>
      <TabDefinicoesStack.Screen
        name="Index"
        component={Definicoes}
        options={{ 
          headerShown: false,
          headerTitle: 'Definições', 
          headerStyle: {
            backgroundColor: '#B39659',
          },
          headerTintColor: '#fff'
        }}
      />
    </TabDefinicoesStack.Navigator>
  );
}
 