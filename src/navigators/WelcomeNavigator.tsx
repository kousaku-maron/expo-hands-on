import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createStackNavigator()

const WelcomeNavigator = (): JSX.Element => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
  </Stack.Navigator>
)

export default WelcomeNavigator
