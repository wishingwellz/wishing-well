import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navbar'

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