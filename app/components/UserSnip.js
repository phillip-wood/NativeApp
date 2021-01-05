import React from "react"
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors"

function UserSnip(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.grey,
  },
  title: {
    fontWeight: "500",
  },
})

export default UserSnip
