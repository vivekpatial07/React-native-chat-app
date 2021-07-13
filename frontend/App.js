import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper'
import Sign from './src/screens/Sign';
import Home from './src/screens/Home'
const Stack = createStackNavigator()

//for paper customization see getting started paper doc page

function App() {
  return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SIGN'>
            <Stack.Screen name='SIGN' component={Sign} options={{title: 'SIGNING PAGE'}}/>
            <Stack.Screen name='HOME' component={Home} options={{title: 'Chat Page'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  )
}

export default App