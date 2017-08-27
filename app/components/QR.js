import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import QRCode from 'react-native-qrcode'
import NavigationBar from 'react-native-navbar';



const leftButtonConfig = {
  title: 'Scan',
  tintColor: 'black'
};

export default class QR extends Component {
  constructor() {
    super()
    this.state = {
      text: 'austen so dumb lolololol'
    }
  }

  render() {
    return (
      <View>
        <NavigationBar
            leftButton={leftButtonConfig}
            title={{title:'QR Code'}}
            tintColor="#00BFFF"
            style={styles.navBar}
          />
        <View style={styles.body}>
          
          <QRCode value={this.state.text} size={200} />
          <Text>This is your QR code</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%'
  },
  navBar: {
    borderBottomWidth: 1,
  }
})