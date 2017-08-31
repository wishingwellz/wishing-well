import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import * as firebase from 'firebase'
import { connect } from 'react-redux'
import { setUserInfo } from '../Actions/Profile/ProfileAction.js'

const mapStateToProps = state => {
  return {
    uid: state.ProfileReducer.uid,
    qr: state.ProfileReducer.qr
  }
}

class LandingPage extends Component {
  componentWillMount() {

    firebase.database().ref(`users/${this.props.uid}`).once('value').then(data => {
      let qr = data.val().wallet

      this.props.setUserInfo({
        qr
      })
    })

  }

  render() {
    return (
      <View style={styles.body}>

        <Text>This is the Home page</Text>
        <ScrollView>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>
            <Text>scrollable well</Text>

        </ScrollView>
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

export default connect(mapStateToProps, { setUserInfo })(LandingPage)
