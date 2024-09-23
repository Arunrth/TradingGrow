import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AllStack from './src/assets/images/allstocks.svg'

const App = () => {
  return (
    <View>
      <Text style={{
        fontFamily:'Manrope-Regular',
        color:'black',
        fontSize:22
      }}>Trading app</Text>
      <AllStack width={120} height={130} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})