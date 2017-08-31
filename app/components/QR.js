import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    qr: state.ProfileReducer.qr
  }
}

class QR extends Component {
  componentWillMount() {
    console.log('qr',this.props.qr)
  }
  render() {

    return (
      <View style={styles.body}>
        <Text>This is your QR code</Text>
        <QRCode value={this.props.qr} size={200} />
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
