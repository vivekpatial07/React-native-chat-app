import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Sign from './src/screens/Sign';
import Home from './src/screens/Home'
const Stack = createStackNavigator()

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
          name='HOME'
          component={Home} 
          options={{
            headerShown: false
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App