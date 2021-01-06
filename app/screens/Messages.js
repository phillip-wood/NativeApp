import React from "react"
import { FlatList, StyleSheet} from "react-native"

import UserSnip from "../components/UserSnip"
import Screen from "../components/Screen"
import ListItemSeparator from "../components/ListItemSeparator"

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
                    image={item.image}
                    onPress={() => console.log("Message Selected", item)}
                    /> 
                  }
            ItemSeparatorComponent={ListItemSeparator}
        />
    </Screen> 
  )
}

const styles = StyleSheet.create({})

export default Messages

