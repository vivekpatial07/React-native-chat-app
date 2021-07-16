import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Avatar } from 'react-native-paper'

export default function Nav({ onPress }) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity style={styles.hamContainer} onPress={onPress}>
        <View style={styles.ham}/>
        <View style={styles.ham}/>
        <View style={styles.ham}/>
      </TouchableOpacity>
      <Text style={{color: '#FFFFFF', alignSelf: 'center'}}>Lets Chat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    height: 70,
    backgroundColor: '#6200EE',
    display: 'flex',
    flexDirection: 'row'
  },
  ham: {
    height: 3,
    width: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal:10,
    marginVertical: 2
  },
  hamContainer: {
    justifyContent: 'center'
  }
})
