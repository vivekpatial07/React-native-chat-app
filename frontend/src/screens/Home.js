import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav'
import Users from '../components/Users'
import { fetchUsersInit, getChatsInit, getOngoingChatsInit } from '../redux/actionCreators'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, Modal } from 'react-native-paper'
import User from '../components/User'


export default function Home({ navigation }) {

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch()
  const { allChats, ongoingChats } = useSelector(state => state)

  const containerStyle = {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 20
  };

  useEffect(() => {
    getCurrentUser().then(usr => {
      dispatch(fetchUsersInit(JSON.parse(usr)._id))
    })
  }, [])

  useEffect(() => {
    getCurrentUser().then(user => {
      dispatch(getOngoingChatsInit(JSON.parse(user)._id))
    })
  }, [])

  const toggleSideBar = () => {
    navigation.openDrawer()
  }

  useEffect(() => {
    getCurrentUser().then((user) => {
      dispatch(getChatsInit(JSON.parse(user)._id))
    })
  }, [])

  const getCurrentUser = async() => {
    const user = await AsyncStorage.getItem('userInfo')
    return(user)
  }

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  console.log(ongoingChats)

  const currentChats = ongoingChats.map(chat => {
    return (
      <User
        username={chat.username}
        id={chat._id}
        key={chat._id}
      />
    )
  })

  return (
    <View style={styles.container}>
      {/* <Nav
        onPress={toggleSideBar}
      /> */}
      <Button icon="comment-plus" onPress={showModal}>
        Add Chat
      </Button>
      <ScrollView style={styles.ongoingChat}>
        {currentChats}
      </ScrollView>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Users />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    paddingVertical: 50,
    paddingHorizontal: 20,
    flex: 1
  },
  ongoingChat: {
    height: '100%'
  }
})
