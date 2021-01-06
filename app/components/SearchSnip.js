import React from "react"
import { View, StyleSheet, TouchableHighlight } from "react-native"
import AppText from "./AppText"

import colors from "../config/colors"

function SearchSnip(props) {
  return (
    <TouchableHighlight 
    onPress={props.onPress}
    underlayColor = {colors.primary}>
    <View style={styles.container}>
        <AppText style={styles.title}>{props.title}</AppText>
    </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.grey,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
})

export default SearchSnip
