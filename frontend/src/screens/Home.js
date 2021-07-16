import { DrawerActions } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Nav from '../components/Nav'
import Users from '../components/Users'

export default function Home({ navigation }) {
  
  const toggleSideBar = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.container}>
      <Nav 
        onPress={toggleSideBar}
      />
      <Users />
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    marginVertical: 50,
    marginHorizontal: 20
  }
})
