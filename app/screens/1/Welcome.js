import React from "react"
import { StyleSheet, SafeAreaView, Image, View, Text } from "react-native"

import colors from "../../config/colors"
import AppButton from "../../components/AppButton"
import Screen from "../../components/Screen"

export default function Welcome() {
  return (
    <Screen style={styles.container}>
        
        <View style={styles.logoContainer}>
            <Image style={styles.image} source={require("../../assets/sneaked-logo-yellow.png")}/>
            <Text style={styles.headerText}>BROWSE, BUY AND BUILD</Text>
            <Text style={styles.headerText}>SNEAKER COLLECTIONS</Text>

        </View>

        <View style={styles.buttonsContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" />
        </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  
  image: {
    width: "80%",
    resizeMode: "contain",
    },

  headerText: {
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: 25,
    fontWeight: "600",
    paddingLeft: "10%",
    paddingRight: "10%"
    },
  
  buttonsContainer: {
    padding: 20,
    width: "100%",
    },

})