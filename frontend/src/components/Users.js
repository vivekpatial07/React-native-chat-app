import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, StyleSheet } from 'react-native'
import User from './User'
import { fetchUsersInit } from '../redux/actionCreators'
import { List } from 'react-native-paper'


export default function Users() {

  const dispatch = useDispatch()
  const {allUsers} = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchUsersInit())    
  }, [])

  const renderUsers = allUsers.map(user => {
    return (
      <User
        username={user.username}
        id={user._id}
        key={user._id}
      />
    )
  })
  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Friends</List.Subheader>
        {renderUsers}
      </List.Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
