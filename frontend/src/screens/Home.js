import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav'
import Users from '../components/Users'
import { fetchUsersInit, getChatsInit } from '../redux/actionCreators'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, Modal, Dialog } from 'react-native-paper'


export default function Home({ navigation }) {

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch()
  const { allChats } = useSelector(state => state)

  const containerStyle = {
    backgroundColor: 'white',
    padding: 10,
  };

  useEffect(() => {
    dispatch(fetchUsersInit())    
  }, [])

  console.log(allChats)

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

  return (
    <View style={styles.container}>
      <Nav
        onPress={toggleSideBar}
      />
      {/* <Users /> */}
      {
        allChats.length <= 0
          ? (
            <Button icon="comment-plus" onPress={showModal}>
              Add Chat
            </Button>
          ) : (
            <Text>all chats</Text>
          )
      }
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <Users />
            </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    marginVertical: 50,
    marginHorizontal: 20,
    flex: 1
  },
  modal: {
    height: 27
  }
})
