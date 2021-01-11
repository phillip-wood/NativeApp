import React from "react"
import { FlatList, StyleSheet, View } from "react-native"

import colors from "../../config/colors"
import Screen from "../../components/Screen"
import UserSnip from "../../components/UserSnip"
import Card from "../../components/Card"

const shoes = [
  {
    id: 1,
    title: "Doc",
    price: "Martin",
    image: require("../../assets/shoe7.jpg"),
  },
  {
    id: 2,
    title: "Converse",
    price: "All Stars",
    image: require("../../assets/shoe5.jpg"),
  },

]

export default function ViewProfile() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <UserSnip title='Lara Simmons' subtitle='sneaker head' image={require('../../assets/user1.png')}/>
      </View>
      <View style={styles.container}>
      <FlatList
        data={shoes}
        keyExtractor={(shoe) => shoe.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
          />
        )}
      />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
  },
  container: {
    marginVertical: 20,
  },
})