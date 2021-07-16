import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User() {
  return (
    <View style={styles.user}>
      <Text>User</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  user: {
    height: 50,
    borderBottomWidth: 0.2
  }
})
