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

const mapStateToProps = (state) => {
  return {
    uid: state.ProfileReducer.uid,
    logs: state.SavingsReducer.entries
  }
}

class LandingPage extends Component {

  componentDidMount() {
    firebase.database().ref(`users/${this.props.uid}`).once('value').then(data => {
      let logs = Object.values(data.val().logs)
      this.props.setSavings(logs)
    })
  }
  
  render() {
    return (
      <View >
        <View>
          <NavigationBar title={{title:'My Wishing Well'}} tintColor='#99ccff'/>
        </View>
          <Text>This is the Home page</Text>
          <Text>This is the Home page</Text>
          <Text>This is the Home page</Text>
          <Text>This is the Home page</Text>
      
          <FlatList
            data={this.props.logs}
            renderItem={({item}) => <Text>{item.amount}</Text>}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  // body: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
})

export default connect(mapStateToProps, { setSavings })(LandingPage)