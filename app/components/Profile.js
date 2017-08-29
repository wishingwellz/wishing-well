import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

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
        </View>
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