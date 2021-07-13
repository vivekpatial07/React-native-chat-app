import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { TextInput, Button, Headline } from 'react-native-paper'
import { signInInit } from '../redux/actionCreators'

export default function Sign() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const loginHandler = () => {
    const userDetails = {
      username,
      password
    }
    dispatch(signInInit(userDetails))
  }

  return (
    <View>
      <Headline style={styles.head}>Sign In</Headline>
      <TextInput
        label='Username'
        value={username}
        onChangeText={(uname) => setUsername(uname)}
        mode='outlined'
        style={styles.input}
      />
      <TextInput
        label='Password'
        value={password}
        onChangeText={(pass) => setPassword(pass)}
        style={styles.input}
        mode='outlined'
        type='password'
        secureTextEntry
      />
      <Button
        style={styles.btn}
        mode='contained'
        compact
        onPress={loginHandler}
      >
        Sign in
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 50,
    marginVertical: 20
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  head: {
    alignSelf: 'center'
  }
})
