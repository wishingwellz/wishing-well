import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email
  }
}

class Profile extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Text>Username: {this.props.username}</Text>
        <Text>First Name: {this.props.firstname}</Text>
        <Text>Last Name: {this.props.lastname}</Text>
        <Text>Email: {this.props.email}</Text>
        <TouchableHighlight onPress={() => Actions.Settings()}>
          <Text>Settings</Text>
        </TouchableHighlight>
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

export default connect(mapStateToProps)(Profile)