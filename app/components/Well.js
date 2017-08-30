import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import Expo from 'expo'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import * as firebase from "firebase"
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

const THREE = require('three')
const THREEView = Expo.createTHREEViewClass(THREE);

const db = firebase.database()


export default class Well extends Component {

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

  componentWillUnmount() {
    timer.clearTimeout(this);
  }
  
  componentWillMount() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xE9E9E9)
    this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);

    this.camera.position.z = 1000;


    this.geometry = new THREE.CylinderGeometry(350, 350, 50, 320);
    this.material = new THREE.MeshBasicMaterial({color: 0xFFDF00});

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  // componentDidMount() {
  //   // timer.setInterval(this, 'slowDown', this.slowDown(), 500)
  // }

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


    //we can use usernmae for ref so each username gets its individual log
    
    const ref = db.ref(userEmail)

    ref.push({
      amount: this.state.amount,
      description: this.state.description
    })

  }

  slowDown() {
    if (this.state.coinSpeed < 20) {
      let newSpeed = this.state.coinSpeed + 0.75;
      this.setState({coinSpeed: newSpeed})
    }
    // this.setState({coinSpeed: 20}, () => timer.setTimeout(
    //   this, 'slowSpeed', () => this.setState({coinSpeed: 2}), 5000
    // ));
  }



  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <View style={styles.body}>
        <View style={styles.inputFields}>
          <View style={{height: "20%"}}>
            <Text style={styles.credentials}>Input Amount</Text>
          </View>
          <TextInput style={styles.amountInputField} placeholder="Amount Here" onChangeText={(text) => this.setState({amount: text})} value={this.state.amount}/>
          <View style={{height: "20%"}}>
            <Text style={styles.credentials}>Description</Text>
          </View>
          <TextInput style={styles.descriptionInputField} placeholder='Description Here' onChangeText={(text) => this.setState({description: text})} value={this.state.description}/>
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
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  coin: {
    height: '80%',
    width: '100%',
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
  amountInputField: {
    width: '100%',
    height: '30%',
    borderColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  descriptionInputField: {
    width: '100%',
    height: '30%',
    borderColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  }
})
