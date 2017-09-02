import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import NavigationBar from 'react-native-navbar'
import QRCode from 'react-native-qrcode'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'


const mapStateToProps = state => {
  return {
    uid: state.ProfileReducer.uid
  }
}

class QR extends Component {

  render() {

    return (
      <View>
         <View>
          <NavigationBar title={{title:'QR Code'}} tintColor='#99ccff'/>
        </View>
        <QRCode value={this.props.uid} size={200} />
        <Text>This is your QR code</Text>
        <Button title="QRScanner" onPress={() => Actions.QRScanner()}>Scan QR Code</Button>
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

export default connect(mapStateToProps)(QR)
