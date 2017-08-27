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


export default class LandingPage extends Component {
  
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