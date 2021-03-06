import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native'
import Expo from 'expo'
import NavigationBar from 'react-native-navbar'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import * as firebase from "firebase"
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'
import { connect } from 'react-redux'
import axios from 'axios'
import ConfirmModal from './ConfirmModal.js'

const THREE = require('three')
const THREEView = Expo.createTHREEViewClass(THREE);

const db = firebase.database()

const mapStateToProps = state => {
  return {
    uid: state.ProfileReducer.uid,
    qr: state.ProfileReducer.qr,
    cardID: state.ProfileReducer.cardID,
    donationID: state.ProfileReducer.donationID,
  }
}
class Well extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      description: '',
      coinSpeed: 20,
    }
    this.onSwipeUp = this.onSwipeUp.bind(this);
    this.slowDown = this.slowDown.bind(this)
  }

  componentWillMount() {
    console.log(this.props.donationID)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xE9E9E9)
    this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);

    this.camera.position.z = 1000;


    this.geometry = new THREE.CylinderGeometry(350, 350, 50, 320);
    this.material = new THREE.MeshBasicMaterial({color: 0xFFDF00});

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  componentDidMount() {
      this.setInterval(
        () => { this.slowDown() },
        500
      );
    }

  tick = () => {
    this.mesh.rotation.x += 1 / this.state.coinSpeed;
    this.mesh.rotation.y += 2 / 60;
  }

  onSwipeUp(gestureState) {
    this.setState({
      coinSpeed: 2
    });

    const ref = db.ref(`users/${this.props.uid}/logs`)

    ref.push({
      date: new Date().toDateString(),
      amount: this.state.amount,
      description: this.state.description
    })
    this.setState({
      amount: '',
      description: '',
    })

    if (this.props.qr !== '' && this.props.cardID !== '') {
      let chargeObj = {
        walletAddress: this.props.qr,
        cardID: this.props.cardID,
        amount: Number(this.state.amount),
      }
      axios.post('http://localhost:4000/api/makeSavings', chargeObj)
      .then(data => {
        console.log(data)
        this.setTimeout(
          () => { alert('Savings Added') },
          750
        );
        let buyObj = {
          walletAddress: this.props.qr,
          uid: this.props.uid,
        }

        // axios.post('http://localhost:4000/api/buyCrypto', buyObj)
      })
    } else {
      this.setTimeout(
        () => { alert('Savings Logged') },
        750
      );
    }
  }

  slowDown() {
    if (this.state.coinSpeed < 20) {
      let newSpeed = this.state.coinSpeed + 0.75;
      this.setState({coinSpeed: newSpeed})
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <View>
        <View>
          <NavigationBar title={{title:'Wishing Well'}} tintColor='#99ccff'/>
        </View>
        <View style={styles.inputFields}>
          <View style={{height: "20%"}}>
            <Text style={styles.credentials}>Input Amount</Text>
          </View>
          <TextInput style={styles.amountInputField} placeholder="Amount Here" onChangeText={(text) => this.setState({amount: text})} value={this.state.amount}/>
          <View style={{height: "20%"}}>
            <Text style={styles.credentials}>Description</Text>
          </View>
          <TextInput placeholder='Description Here' placeholderTextColor={'#A8A8A8'} style={styles.descriptionInputField} multiline={true} numberOfLines={2} onChangeText={(text) => this.setState({description: text})} value={this.state.description}/>
          <View style={styles.confirmModal}>
            <ConfirmModal amount={this.state.amount} description={this.state.description}/>
          </View>
        </View>
        <GestureRecognizer
          onSwipeUp={(state) => this.onSwipeUp(state)}
          config={config}
          style={styles.coin}
          >
          <THREEView
            style={styles.coin}
            scene={this.scene}
            camera={this.camera}
            tick={this.tick}
          />
        </GestureRecognizer>
      </View>
    )
  }
}

reactMixin(Well.prototype, TimerMixin);

const styles = StyleSheet.create({
  coin: {
    top: '6%',
    height: '75%',
    width: '100%',
  },
  inputFields: {
    marginTop: '2%',
    marginLeft: '25%',
    height: '20%',
    width: '50%',
    borderColor: 'gray',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  credentials: {
    paddingTop: 10
  },
  confirmModal: {
    marginTop: '5%',
    height: '10%',
    width: 100,
  },
  amountInputField: {
    width: '100%',
    height: '20%',
    borderColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  descriptionInputField: {
    width: '100%',
    height: '40%',
    borderColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 15,
  },
})

export default connect(mapStateToProps)(Well)
