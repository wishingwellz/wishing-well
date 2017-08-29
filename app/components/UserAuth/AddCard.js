import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';

export default class AddCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expiration: '',
      cvc: '',
    }
    this.addACard = this.addACard.bind(this)
  }

  addACard() {
    Alert.alert('Added a Card!')
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
          <Button title="AddACard" onPress={() => this.addACard()}>Add a Card</Button>
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
