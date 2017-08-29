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

const THREE = require('three')
const THREEView = Expo.createTHREEViewClass(THREE);

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',

    }
    this._login = this._login.bind(this)
    this._register = this._register.bind(this)
  }

  _login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(data => {
      if (data) {
        Actions.Home()
      }
    })
    .catch((err) => {
      console.log(err.code)
      console.log(err.message)
    })
  }

  _register() {
    Actions.Register()
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
        <Button title="Register" onPress={this._register}></Button> 
        <Button title="BypassAuth" onPress={() => Actions.Home()}></Button>
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