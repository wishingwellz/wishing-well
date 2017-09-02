import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navbar'
import QRCode from 'react-native-qrcode'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    uid: state.ProfileReducer.uid
  }
}

class QR extends Component {
  componentWillMount() {
    console.log('qr',this.props.qr)
  }
  render() {

    return (
      <View>
         <View>
          <NavigationBar title={{title:'QR Code'}} tintColor='#99ccff'/>
        </View>
        <Text>This is your QR code</Text>
        <QRCode value={this.props.uid} size={200} />
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
