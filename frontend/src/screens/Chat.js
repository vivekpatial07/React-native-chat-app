import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Nav from '../components/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { io } from 'socket.io-client'
import { TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMessagesInit, getPrivateChatInit } from '../redux/actionCreators'

export default function Chat() {

  const [message, setMessage] = useState('')
  const [currentUser, setCurrentUser] = useState()
  const [messages, setMessages] = useState([])
  const route = useRoute()
  const dispatch = useDispatch()
  const { chatData, userMessages } = useSelector(state => state)
  let socket = useRef(null)

  useEffect(()=>{
    socket.current = io('http://192.168.0.130:7000')
    socket.current.on('connect', () => console.log('front socket connected'))
  }, [])

  useEffect(() => {
    socket.current.emit('join-room', chatData)
  } ,[chatData])

  const submitHandler = async() => {
    const messageObj = {
      content: message,
      reciever: route.params.id,
      sender: currentUser._id,
      chatData
    }
    socket.current.emit('sendMessage', messageObj)
    // setMessage('')
  }

  useEffect(() => {
    socket.current.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
  }, []);

  useEffect(() => {
    setMessages(userMessages)
      return () => setMessages([])
  }, [userMessages])

  useEffect(() => {
    getCurrentUser().then(usr => {
      const parsedUser = JSON.parse(usr)
      const data = {
        sender: parsedUser._id,
        receiver: route.params.id
      }
      dispatch(getPrivateChatInit(data))
    })
  }, [])

  useEffect(() => {
    if(chatData) {
      dispatch(getMessagesInit(chatData._id))
    }
  }, [chatData])

  const getCurrentUser = async() => {
    const user = await AsyncStorage.getItem('userInfo')
    setCurrentUser(JSON.parse(user))
    return user
  }

  const allMsgs = messages.map(msg => {
    return <Text key={msg._id}>{msg.content}</Text>
  })
  console.log(userMessages)
  console.log('rerendering')

  return (
    <View style={styles.container}>
      <Text>Chat with {route.params.name}</Text>
      {allMsgs.length > 0 ? allMsgs : <Text>no chats</Text>}
      <TextInput
        style={styles.chatBox}
        placeholder='type here ...'
        onChangeText={(msg) => setMessage(msg)}
        onSubmitEditing={submitHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    marginVertical: 10,
    flex: 1
  },
  chatBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
})
