import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Nav from '../components/Nav'
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/native'



export default function Chat() {
 
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <View style={styles.container}>
      <Text>Chat with {route.params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    marginVertical: 50,
    marginHorizontal: 20
  }
})
