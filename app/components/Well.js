import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Expo from 'expo'

const THREE = require('three')
const THREEView = Expo.createTHREEViewClass(THREE);

export default class Well extends Component {

  componentWillMount() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xE9E9E9)
    this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);

    this.camera.position.z = 1000;

    
    this.geometry = new THREE.CylinderGeometry(300, 300, 50, 320);
    this.material = new THREE.MeshBasicMaterial({color: 0xFFDF00});

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }
  tick = () => {
    this.mesh.rotation.x += 1 / 30;
    this.mesh.rotation.y += 2 / 60;
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.inputFields}>
          <Text style={styles.credentials}>Input Amount</Text><TextInput style={styles.inputFields}/>
          <Text style={styles.credentials}>Description</Text><TextInput style={styles.inputFields}/>
        </View>
        <THREEView
          style={styles.coin}
          scene={this.scene}
          camera={this.camera}
          tick={this.tick}
        />
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
    height: '60%',
    width: '60%',
  },
  inputFields: {
    marginTop: '20%',
    height: 50,
    width: 50,
  },
  credentials: {
    paddingTop: 20
  },
  inputFields: {
    width: '50%',
    marginTop: 20
  }
})
