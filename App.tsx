import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.mainCon}>
      <Text>Trading app</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainCon:{
    flex:1
  }
})