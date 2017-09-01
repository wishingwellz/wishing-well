import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import * as firebase from 'firebase'
import NavigationBar from 'react-native-navbar'
import { connect } from 'react-redux'
import { setSavings } from '../Actions/Savings/SavingsAction'
import { setUserInfo } from '../Actions/Profile/ProfileAction'
import { setUserPhoto } from '../Actions/Profile/PhotoAction'

const mapStateToProps = (state) => {
  return {
    uid: state.ProfileReducer.uid,
    logs: state.SavingsReducer.entries,
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email,
    bio: state.ProfileReducer.bio,
    photo: state.PhotoReducer.photo
  }
}

class LandingPage extends Component {

  componentWillMount() {
    firebase.database().ref(`users/${this.props.uid}`).once('value').then(data => {
      let logs = Object.values(data.val().logs)
      let { username, firstname, lastname, email, photo, bio } = data.val()
      this.props.setUserInfo({
        username,
        firstname,
        lastname,
        email,
        bio
      })
      console.log('this is the user', data.val())
      this.props.setSavings(logs)
      this.props.setUserPhoto(photo)
    })
  }

  render() {
    return (
      <View >
        <View>
          <NavigationBar title={{title:'My Wishing Well'}} tintColor='#99ccff'/>
        </View>
<<<<<<< HEAD
          <Text>HERE IS A WELL</Text>
          <Text>HERE IS A WELL</Text>
          <Text>HERE IS A WELL</Text>
          <Text>HERE IS A WELL</Text>
          <Text>HERE IS A WELL</Text>
          <Text>HERE IS A WELL</Text>
          <FlatList
            data={this.props.logs}
            renderItem={({item}) => 
            <View>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>}       
          />
=======
          <Text>This is the Home page</Text>
          <Text>This is the Home page</Text>
          <Text>This is the Home page</Text>
          <Text>This is the Home page</Text>

          <FlatList
            data={this.props.logs}
            renderItem={({item}) => <Text>{item.amount}</Text>}
        />
>>>>>>> Credit card form working
      </View>
    )
  }
}

const styles = StyleSheet.create({
  date: {
    textAlign: 'left'
  },
  amount: {
    textAlign: 'right',
    marginRight: 15
  }
})

export default connect(mapStateToProps, { setSavings, setUserInfo, setUserPhoto })(LandingPage)
