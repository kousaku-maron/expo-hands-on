import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const WorldScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.message}>World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  message: {
    textAlign: 'center',
  },
})

export default WorldScreen
