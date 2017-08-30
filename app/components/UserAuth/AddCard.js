import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { client } from '../../Coinbase/index.js';

const db = firebase.database()

const mapStateToProps = (state) => {
  return {
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email
  }
}

class AddCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expiration: '',
      cvc: '',
    }
    this.addAWallet = this.addAWallet.bind(this)
  }

  addAWallet() {
    let userEmail = this.props.email;
    console.log(client)
    // const usersTable = db.ref('users/regular/321')
    // usersTable.set({
    //   wallet: '111223345',
    // })
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.inputFields}>
          <View style={{height: "15%"}}>
            <Text style={styles.credentials}>Card Number</Text>
          </View>
          <TextInput style={styles.cardNumberInputField} placeholder="Credit Card Number" onChangeText={(text) => this.setState({cardNumber: text})} value={this.state.amount} maxLength={16}/>
          <View style={{height: "15%"}}>
            <Text style={styles.credential}>Expiration Date</Text>
          </View>
          <TextInput style={styles.expirationInputField} placeholder='Expiration Date' onChangeText={(text) => this.setState({expiration: text})} value={this.state.expiration} maxLength={5}/>
          <View style={{height: "15%"}}>
            <Text style={styles.credential}>CVC</Text>
          </View>
          <TextInput style={styles.cvcInputField} placeholder='CVC' onChangeText={(text) => this.setState({cvc: text})} value={this.state.cvc} maxLength={3}/>
          <Button title="AddACard" onPress={() => {}}>Add a Card</Button>
          <Button title="AddAWallet" onPress={() => this.addAWallet()}>Add a Wallet</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputFields: {
    marginTop: '5%',
    height: '35%',
    width: 200,
    borderColor: 'gray',
  },
  credentials: {
    paddingTop: 10
  },
  cardNumberInputField: {
    width: '100%',
    height: '30%',
    borderColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  expirationInputField: {
    width: '100%',
    height: '30%',
    borderColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  cvcInputField: {
    width: '100%',
    height: '30%',
    borderColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  }
})

export default connect(mapStateToProps)(AddCard)
