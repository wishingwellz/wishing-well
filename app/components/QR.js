import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode'

export default class QR extends Component {
  constructor() {
    super()
    this.state = {
      text: '1Fyvqr8BZ56Z8TuedhLbMDnJz7VyG9p8zm'
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <Text>This is your QR code</Text>
        <QRCode value={this.state.text} size={200} />
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