import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import LandingPage from './LandingPage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default class WishingWell extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon name="currency-usd" size={30} color="#000" />
        <Text style={styles.title}>
          Wishing Well
        </Text>
        
        <Text style={styles.credentials}>username</Text><TextInput style={styles.inputFields}/>
        <Text style={styles.credentials}>password</Text><TextInput style={styles.inputFields}/>

         <Button title="Login" onPress={() => Actions.Home()}></Button> 
      
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
    width: '50%',
    marginTop: 20
  },
  credentials: {
    paddingTop: 20
  }
});