import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper'

export default function User({username}) {
  
  const userPressedHandler = () => {
    console.log('hii')
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
