import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navbar'


export default class Profile extends Component {

  render() {
    return (
      <View>
        <NavigationBar
              title={{title:'Profile'}}
              tintColor="#00BFFF"
              style={styles.navBar}
        />
        <Text>This is Profile page</Text>
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
  navBar: {
    borderBottomWidth: 1,
  }
})