import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class QR extends Component {
  

  render() {
    return (
      <View style={styles.body}>
        <Text>This is QR page</Text>
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