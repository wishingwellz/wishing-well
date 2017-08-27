import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode'
import Tabbar from 'react-native-tabbar'

export default class QR extends Component {
  constructor() {
    super()
    this.state = {
      text: 'austen so dumb lolololol'
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.qrTop}>
          <Text>Scan</Text>
        </View>
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
  },
  qrTop: {
    borderWidth: 1,
    width: '100%',
    height: '10%'
  }
})