import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core'

export default function User({ username, id }) {
  const navigation = useNavigation()  
  const userPressedHandler = () => {
    navigation.navigate('CHAT', {
      name: username,
      id
    })
  }
  
  return (
    <View style={styles.user}>
      <List.Item
        onPress={userPressedHandler}
        title={username}
        left={() => <List.Icon icon='account'/>}    
      />
    </View>
  )
}

const styles = StyleSheet.create({
  user: {
    height: 50,
    borderBottomWidth: 0.2
  }
})
