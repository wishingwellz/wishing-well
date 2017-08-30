import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { Actions } from 'react-native-router-flux'
import AddCard from './UserAuth/AddCard.js'

import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'

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


class Profile extends Component {

  render() {
    return (
      <View >
        <NavigationBar title={{title:'Profile'}} rightButton={rightButtonConfig} tintColor='#99ccff'/>
          <View style={styles.body}>
            <Text>Username: {this.props.username}</Text>
            <Text>First Name: {this.props.firstname}</Text>
            <Text>Last Name: {this.props.lastname}</Text>
            <Text>Email: {this.props.email}</Text>
          </View>
          <Button title="AddCard" onPress={() => Actions.AddCard()}>Add a Credit Card</Button>
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
