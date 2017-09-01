import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button, Icon } from 'react-native';
import { Form, Separator, InputField } from 'react-native-form-generator';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserInfo } from '../../Actions/Profile/ProfileAction.js';

const db = firebase.database()

const mapStateToProps = (state) => {
  return {
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email,
    uid: state.ProfileReducer.uid
  }
}

class AddCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    }
    this.addAWallet = this.addAWallet.bind(this)
    this.addACard = this.addACard.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(formData){
    this.state.formData= formData
  }

  addACard() {
    console.log(this.state.formData)
  }

  addAWallet() {
    let userUID = this.props.uid;
    db.ref('users/' + userUID).once('value')
    .then(data => {
      if (!data.val().wallet) {
        axios.post('http://localhost:4000/api/addAWallet', {UID: userUID})
        .then(({ data }) => {
          db.ref('users/' + userUID).set({
            wallet: data,
          });
          this.props.setUserInfo({
            qr: data
          });
        });
      }
    });
  }

  render() {
    return (
      <View>
        <Form
           style={styles.form}
           ref='CreditCardInfo'
           onChange={this.handleFormChange}
           label='CreditCardInfo' >

         <InputField
             ref='CardNumber'
             placeholder='Credit Card Number'
             value={this.state.cardNumber}

           />


          <InputField
             ref='CardDateMonth'
             placeholder='Exp. Month'
             value={this.state.cardMonth}

           />

         <InputField
             ref='CardDateYear'
             placeholder='Exp. Year'
             value={this.state.cardYear}

           />
         <InputField
             ref='CardCVC'
             placeholder='CVC'
             value={this.state.cvc}
           />
         </Form>

        <Button title="Add A Card" onPress={this.addACard}>Add a Card</Button>
        <Button title="Add A sWallet" onPress={this.addAWallet}>Add a Wallet</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#C0C0C0'
  },
  icon: {
    marginTop: 7,
    marginLeft: 4,
    color:'gray'
  }
})

export default connect(mapStateToProps, { setUserInfo })(AddCard)
