import React from "react"
import { FlatList, StyleSheet } from "react-native"

import Screen from "../../components/Screen"
import Card from "../../components/Card"
import colors from "../../config/colors"

const shoes = [
  {
    id: 1,
    title: "Nike",
    price: "Air Force",
    image: require("../../assets/shoe1.jpg"),
  },
  {
    id: 2,
    title: "Doc",
    price: "Martin",
    image: require("../../assets/shoe7.jpg"),
  },
  {
    id: 3,
    title: "Nike",
    price: "Runners",
    image: require("../../assets/shoe3.jpg"),
  },
  {
    id: 4,
    title: "Converse",
    price: "All Stars",
    image: require("../../assets/shoe5.jpg"),
  },

]

function SearchResults() {
  return (
    <Screen style={styles.screen}>
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
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.black,
  },
})

export default SearchResults
