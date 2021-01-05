import React, { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"

import UserSnip from "../components/UserSnip"
import Screen from "../components/Screen"

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/user1.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/user1.png"),
  },
]

function Messages(props) {

  return (
     <Screen>

        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
                <UserSnip 
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}/> } />
    </Screen> 
  )
}

const styles = StyleSheet.create({})

export default Messages

