import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button, Icon } from 'react-native';
import { Form, Separator, InputField } from 'react-native-form-generator';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserInfo } from '../../Actions/Profile/ProfileAction.js';
import { Switch } from 'react-native-switch';

const db = firebase.database()

const mapStateToProps = (state) => {
  return {
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email,
    uid: state.ProfileReducer.uid,
    investments: state.ProfileReducer.investments
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
    let cardInfo = {
      number: this.state.formData.CardNumber,
      exp_month: this.state.formData.CardDateMonth,
      exp_year: this.state.formData.CardDateYear
    }
    axios.post('http://localhost:4000/api/addACard', cardInfo)
    .then(({ data }) => {
      db.ref('users/' + this.props.uid).update({
        cardID: data
      });
      this.props.setUserInfo({
        cardID: data
      });
    })
  }

  addAWallet() {
    let userUID = this.props.uid;
    db.ref('users/' + userUID).once('value')
    .then(data => {
      if (!data.val().wallet) {
        axios.post('http://localhost:4000/api/addAWallet', {UID: userUID})
        .then(({ data }) => {
          db.ref('users/' + userUID).update({
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
             placeholder='Card Number'
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
        <Button title="Add A Wallet" onPress={this.addAWallet}>Add a Wallet</Button>
        <View style={styles.toggleSwitch}>
          <Switch
            value={false}
            onValueChange={(val) => {
              if (val) {
                this.props.setUserInfo({
                  investments: 'End of Day',
                })
                console.log()
              } else {
                this.props.setUserInfo({
                  investments: 'Immediate',
                })
              }
            }}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'#30a566'}
            circleInActiveColor={'#000000'}
          />
        </View>
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
  },
  toggleSwitch: {
    marginLeft: '41%',
  }
})

export default connect(mapStateToProps, { setUserInfo })(AddCard)
