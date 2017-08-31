import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 Button
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import Register from './Register'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Expo from 'expo'
import { firebaseRef } from '../services/firebase'
import * as firebase from 'firebase'
import { fbAppId } from '../../config'
import { connect } from 'react-redux'
import { setUserInfo } from '../Actions/Profile/ProfileAction'


const THREE = require('three')
const THREEView = Expo.createTHREEViewClass(THREE);

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this._login = this._login.bind(this)
    this._loginWithFacebook = this._loginWithFacebook.bind(this)
  }

  _login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(data => {
      if (data) {
        const uid = data.uid.substring(0, 10)
        firebase.database().ref('users/' + uid).update({
          username: this.state.email
        })
        
        this.props.setUserInfo({
          email: data.email,
          uid: uid
        })
        Actions.Home()
      }
    })
    .catch((err) => {
      console.log(err.code)
      console.log(err.message)
    })
  }


  async _loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(fbAppId, {
        permissions: ['public_profile', 'email'],
      });

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      
      fetch(`https://graph.facebook.com/me?access_token=${token}`)
      .then(response => {
        let res = JSON.parse(response._bodyText)

        // adding user to firebase db
        firebase.database().ref('users/' + res.id.substring(0, 10)).update({
          name: res.name
        })
        let name = res.name.split(' ')
        let firstname = name[0]
        let lastname = name[name.length - 1]
        //adding userInfo to the store
        this.props.setUserInfo({
          firstname,
          lastname,
          uid: res.id
        })
      }).catch(err => console.error(err))

      Actions.Home()
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Icon name="currency-usd" size={30} color="#000" />
        <Text style={styles.title}>
          Wishing Well
        </Text>

        <TextInput
          style={styles.inputFields}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
          value={this.email}
          autoCorrect={false}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.inputFields}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          value={this.password}
          autoCorrect={false}
          secureTextEntry={true}
          autoCapitalize='none'
        />

        <Button title="Login" onPress={this._login}></Button>

        <Button title="Register" onPress={() => Actions.Register()}></Button>
        <Button title="Login with FaceBook" onPress={this._loginWithFacebook}></Button>
        <Button title="Bypass" onPress={() => Actions.Home()}></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   marginTop: '20%',
 },
 title: {
   fontWeight: 'bold'
 },
 inputFields: {
   borderWidth: 1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 20,
   width: '50%',
   marginTop: 20,
   marginLeft: '20%'
 },
 credentials: {
   paddingTop: 20
 }
});


export default connect(null, { setUserInfo })(Login);
