import Amplify, { Storage }from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'

import React, { useEffect, useState }from 'react'
import { TextInput, View } from 'react-native'

import { API, graphqlOperation } from 'aws-amplify'
import { listSneakers } from './graphql/queries'

//partOne
import Welcome from './app/screens/1/Welcome'
import Login from './app/screens/1/Login'
import Register from './app/screens/1/Register'

//partTwo
import Home from './app/screens/2/Home'
import Search from './app/screens/2/Search'
import SearchResults from './app/screens/2/SearchResults'
import ShoeFocus from './app/screens/2/ShoeFocus'
import ViewImage from './app/screens/2/ViewImage'

//partThree
import ViewProfile from './app/screens/3/ViewProfile'

//db admin
import SneakerInput from './app/screens/SneakerInput'



function App() {

  // const [sneakers, setSneakers] = useState([])

  // useEffect(() => {
  //   fetchSneakers()
  // }, [])

  // async function fetchSneakers() {
  //   try {
  //     const sneakerData = await API.graphql(graphqlOperation(listSneakers))
  //     const sneakers = sneakerData.data.listSneakers.items
  //     setSneakers(sneakers)
  //   } catch (err) { console.log('error fetching sneakers') }
  // }

  return <ViewProfile/>
}



export default App
// export default withAuthenticator(App, { usernameAttributes: 'email' })