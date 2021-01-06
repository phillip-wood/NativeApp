import React from "react"
import { View, Image, StyleSheet } from "react-native"

import colors from "../../config/colors"
import UserSnip from "../../components/UserSnip"
import AppText from "../../components/AppText"

function ShoeFocus(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/shoe5.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Converse</AppText>
        <AppText style={styles.price}>All Stars</AppText>
        <View style={styles.userContainer}>
          <UserSnip
            image={require("../../assets/user1.png")}
            title="Lara Simmons"
            subTitle="2 Pair"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ShoeFocus