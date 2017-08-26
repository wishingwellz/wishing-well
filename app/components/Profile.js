import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Text>This is Profile page</Text>
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