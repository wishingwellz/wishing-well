import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navbar'

export default class Well extends Component {
  
  render() {
    return (
      <View>
        <NavigationBar
              title={{title:'My Well'}}
              tintColor="#00BFFF"
              style={styles.navBar}
        />

        <Text>This is Well page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  navBar: {
    borderBottomWidth: 1,
  }
})