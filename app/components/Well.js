import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import Expo from 'expo'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'

const THREE = require('three')
const THREEView = Expo.createTHREEViewClass(THREE);

export default class Well extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      description: '',
      coinSpeed: 20,
    }
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
  tick = () => {
    this.mesh.rotation.x += 1 / this.state.coinSpeed;
    this.mesh.rotation.y += 2 / 60;
  }

  onSwipeUp(gestureState) {
    (this.state.coinSpeed === 20) ? this.setState({coinSpeed: 2}) : this.setState({coinSpeed: 20})
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
