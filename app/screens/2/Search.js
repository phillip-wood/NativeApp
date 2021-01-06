import React from 'react'
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native'

import colors from '../../config/colors'

export default function Search() {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.headerText} >BROWSE, BUY AND BUILD SHOE COLLECTIONS.</Text>
      <Text style={styles.pickers}>Brand Picker</Text>
      <Text style={styles.pickers}>Model Picker</Text>
      <Text style={styles.pickers}>Sub-Model Picker</Text>
      <Button style={styles.button} title='Search'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: colors.black ,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    flex: 1,
    backgroundColor: colors.black,
    color: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pickers: {
    flex: 1,
    backgroundColor: colors.white ,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
  },

})