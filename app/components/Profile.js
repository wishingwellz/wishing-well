import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { Actions } from 'react-native-router-flux'
import AddCard from './UserAuth/AddCard.js'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email
  }
}

const rightButtonConfig = {
  title: 'Settings',
  handler() {
    Actions.Settings()
  },
  tintColor: 'black'
}

const leftButtonConfig = {
  title: 'Add Card',
  handler() {
    Actions.AddCard()
  },
  tintColor: 'black'
}


class Profile extends Component {

  render() {
    return (
      <View >
        <NavigationBar title={{title:'Profile'}} rightButton={rightButtonConfig} tintColor='#99ccff' leftButton={leftButtonConfig}/>
          <View style={styles.body}>
            <Text>Username: {this.props.username}</Text>
            <Text>First Name: {this.props.firstname}</Text>
            <Text>Last Name: {this.props.lastname}</Text>
            <Text>Email: {this.props.email}</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps)(Profile)
