import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Well extends Component {
  
  render() {
    return (
      <View style={styles.body}>
        <Text>This is Well page</Text>
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