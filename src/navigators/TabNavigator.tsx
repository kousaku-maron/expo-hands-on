import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HelloScreen from '../screens/HelloScreen'
import WorldScreen from '../screens/WorldScreen'

const Stack = createStackNavigator()

const HelloNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={HelloScreen}
      options={{
        headerTitle: 'ハロー',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const WorldNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={WorldScreen}
      options={{
        headerTitle: 'ワールド',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TabNavigator = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="HelloTab"
    tabBarOptions={{ showLabel: false }}
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/display-name, @typescript-eslint/no-unused-vars
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'HelloTab') {
          return <MaterialCommunityIcons name="home" size={24} />
        }
        if (route.name === 'WorldTab') {
          return <MaterialCommunityIcons name="account" size={24} />
        }
      },
    })}
  >
    <Tab.Screen name="HelloTab" component={HelloNavigator} />
    <Tab.Screen name="WorldTab" component={WorldNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
