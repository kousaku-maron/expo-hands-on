import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigators/TabNavigator'

// ここでリターンされるコンポーネントがアプリ上で表示される。
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App
