import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import LandingPage from './LandingPage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Expo from 'expo'

const THREE = require('three')
const THREEView = Expo.createTHREEViewClass(THREE);

export default class WishingWell extends Component {
  componentWillMount() {  
  this.scene = new THREE.Scene();

  // 75 degrees is our vertical field of view
  // 1 is our cameras view aspect ratio i.e. window width divided by its height
  // 1 is the distance of nearest object that will be captured 
  // 10000 is the distance of the furthest object that will be captured
  this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);
  // Pull camera away from the cube
  this.camera.position.z = 1000;

  // Dimensions of our cube: width, height and depth
  this.geometry = new THREE.BoxGeometry(200, 200, 200);
  this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});

  this.mesh = new THREE.Mesh(this.geometry, this.material);
  this.scene.add(this.mesh);
}
tick = () => {  
  this.mesh.rotation.x += 1 / 60;
  this.mesh.rotation.y += 2 / 60;
}

  render() {
    return (
    //   <View style={styles.container}>
    //      <Icon name="currency-usd" size={30} color="#000" />
    //     <Text style={styles.title}>
    //       Wishing Well
    //     </Text>
        
    //     <Text style={styles.credentials}>username</Text><TextInput style={styles.inputFields}/>
    //     <Text style={styles.credentials}>password</Text><TextInput style={styles.inputFields}/>

    //      <Button title="Login" onPress={() => Actions.Home()}></Button>  
    //       <THREEView
    //   style={{ flex: 1 }}
    //   scene={this.scene}
    //   camera={this.camera}
    // />
    //   </View>
        <THREEView
      style={{ flex: 1 }}
      scene={this.scene}
      camera={this.camera}
      tick={this.tick}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '20%',
  }, 
  title: {
    fontWeight: 'bold'
  },
  inputFields: {
    borderWidth: 1,
    width: '50%',
    marginTop: 20
  },
  credentials: {
    paddingTop: 20
  }
});