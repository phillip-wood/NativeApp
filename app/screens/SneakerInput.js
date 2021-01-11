import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button
} from 'react-native'

import { API, graphqlOperation } from 'aws-amplify'
import { createSneaker } from '../../graphql/mutations'
import { listSneakers } from '../../graphql/queries'

const initialState = { brand:'', model:'', submodel:'', colorway:'' }

const SneakerInput = () => {
    const [formState, setFormState] = useState(initialState)
    const [sneakers, setSneakers] = useState([])

    useEffect(() => {
     fetchSneakers()
    }, [])

    async function fetchSneakers() {
        try {
        const sneakerData = await API.graphql(graphqlOperation(listSneakers))
        const sneakers = sneakerData.data.listSneakers.items
        setSneakers(sneakers)
        } catch (err) { console.log('error fetching sneakers') }
    }
  
    function setInput(key, value) {
      setFormState({ ...formState, [key]: value })
    }
  
  
    async function addSneaker() {
      try {
        const sneaker = { ...formState }
        setSneakers([...sneakers, sneaker])
        setFormState(initialState)
        await API.graphql(graphqlOperation(createSneaker, {input: sneaker}))
      } catch (err) {
        console.log('error creating todo:', err)
      }
    }
  
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={val => setInput('brand', val)}
          style={styles.input}
          value={formState.brand}
          placeholder="brand"
        />
        <TextInput
          onChangeText={val => setInput('model', val)}
          style={styles.input}
          value={formState.model}
          placeholder="model"
        />
        <TextInput
          onChangeText={val => setInput('submodel', val)}
          style={styles.input}
          value={formState.submodel}
          placeholder="submodel"
        />
        <TextInput
          onChangeText={val => setInput('colorway', val)}
          style={styles.input}
          value={formState.colorway}
          placeholder="colorway"
        />
        <Button title="Create Sneaker" onPress={addSneaker} />
        {
          sneakers.map((sneaker, index) => (
            <View key={sneaker.id ? sneaker.id : index} style={styles.sneaker}>
              <Text style={styles.sneakerName}>{sneaker.name}</Text>
              <Text>{sneaker.description}</Text>
            </View>
          ))
        }
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    sneaker: {  marginBottom: 15 },
    input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
    sneakerName: { fontSize: 18 }
  })
  
  export default SneakerInput