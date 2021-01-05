import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

import colors from "../config/colors"

function AppButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress} >
        <Text style={styles.text} >{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
})

export default AppButton
