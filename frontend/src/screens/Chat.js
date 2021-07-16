import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Nav from '../components/Nav'

export default function Chat({ navigation }) {

  const toggleSideBar = () => {
    navigation.openDrawer()
  }
  return (
    <View style={styles.container}>
      <Nav onPress={toggleSideBar}/>
      <Text>Chat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    marginVertical: 50,
    marginHorizontal: 20
  }
})
