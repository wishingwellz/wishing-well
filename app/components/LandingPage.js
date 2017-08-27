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

//can use modal to show details of each tick on the well

export default class LandingPage extends Component {
  
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.wellTop}>
          <Text>Current Savings: $20</Text>
        </View>
        <ScrollView style={{borderWidth:1, width:'40%'}}>
            <Text style={{height:800}}>scrollable well</Text>
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
  },
  wellTop: {
    marginTop:20,
    borderWidth: 1,
    width: '100%',
    height: '10%'
  }
})