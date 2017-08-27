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
//   componentWillMount() {  
//   this.scene = new THREE.Scene();
//   this.scene.background = new THREE.Color(0xffffff);
  
//   // 75 degrees is our vertical field of view
//   // 1 is our cameras view aspect ratio i.e. window width divided by its height
//   // 1 is the distance of nearest object that will be captured 
//   // 10000 is the distance of the furthest object that will be captured
//   this.camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);
//   // Pull camera away from the cube
//   this.camera.position.z = 2000;

//   // Dimensions of our cube: width, height and depth
//   this.geometry = new THREE.CylinderGeometry(100, 100, 5, 50, 50, false)
//   this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//   this.yAxis = new THREE.Vector3(0,1,0);

//   this.mesh = new THREE.Mesh(this.geometry, this.material);
//   this.scene.add(this.mesh);

  
// }
// tick = () => {  
//   this.mesh.rotation.x += 1/ 60;
//   this.mesh.rotation.y += 1 / 60;
//   this.mesh.rotateOnAxis(this.yAxis, 0.1)
// }

  render() {
    return (
      <View style={styles.container}>
         <Icon name="currency-usd" size={30} color="#000" />
        <Text style={styles.title}>
          Wishing Well
        </Text>
        
        <Text style={styles.credentials}>username</Text><TextInput style={styles.inputFields}/>
        <Text style={styles.credentials}>password</Text><TextInput style={styles.inputFields}/>

         <Button title="Login" onPress={() => Actions.Home()}></Button>  
          
      </View>
    //     <THREEView
    //   style={{ flex: 1, height: 50, width: 200 }}
    //   scene={this.scene}
    //   camera={this.camera}
    //   tick={this.tick}
    // />
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: '50%',
    marginTop: 20
  },
  credentials: {
    paddingTop: 20
  }
});