import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Sign from './src/screens/Sign';
import Home from './src/screens/Home'
import User from './src/components/User';
import Chat from './src/screens/Chat';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
//for paper customization see getting started paper doc page


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SIGN'>
        <Stack.Screen
          name='SIGN'
          component={Sign}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='MAIN'
          component={Home} 
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name='CHAT'
          component={Chat}
          options={{
            // headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App