import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { Actions } from 'react-native-router-flux'
import AddCard from './UserAuth/AddCard.js'
export default class Profile extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Text>Username</Text>
        <Text>First Name</Text>
        <Text>Last Name</Text>
        <Text>Email</Text>
        <TouchableHighlight onPress={() => Actions.Settings()}>
          <Text>Settings</Text>
        </TouchableHighlight>
<<<<<<< HEAD
        </View>
=======
        <Button title="AddCard" onPress={() => Actions.AddCard()}>Add a Credit Card</Button>
      </View>
>>>>>>> Going to try to detach Expo
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
