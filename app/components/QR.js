import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navbar'
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
      <View>
         <View>
          <NavigationBar title={{title:'QR Code'}} tintColor='#99ccff'/>
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
  }
})