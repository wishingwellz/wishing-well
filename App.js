import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Login from './app/components/Login'
import Landing from './app/components/LandingPage'
import LogHistory from './app/components/LogHistory'
import QR from './app/components/QR/QR'
import Profile from './app/components/Profile'
import Settings from './app/components/Settings'
import Well from './app/components/Wells/Well'
import DonationWell from './app/components/Wells/DonationWell'
import AddCard from './app/components/UserAuth/AddCard'
import QRScanner from './app/components/QR/QRScanner'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Expo from 'expo'
import Register from './app/components/Register'
import reducers from './app/Reducers/index'


const store = createStore(reducers)

class TabIcon extends Component {
  render() {
    let select
    return (
      <View style={{flex:1, flexDirection:'row', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon name={this.props.iconName || "circle"} size={27}/>
        <Text style={{fontSize: 12}}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class WishingWell extends Component {

  render() {
    return (
    <Provider store={store}>
      <Router>
        <Scene key="root" >
          <Scene key="Login" component={Login} initial hideNavBar/>
          <Scene key="Register" component={Register} hideNavBar/>
          <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
            <Scene key="Home" component={Landing} iconName="home" icon={TabIcon} hideNavBar/>
            <Scene key="QR" component={QR} iconName="qrcode" icon={TabIcon} hideNavBar/>
            <Scene key="Well" component={Well} iconName="currency-usd" icon={TabIcon} hideNavBar/>
            <Scene key="Log" component={LogHistory} iconName="format-list-bulleted" icon={TabIcon} hideNavBar/>
            <Scene key="Profile" component={Profile} iconName="account-outline" icon={TabIcon} hideNavBar/>
          </Scene>
            <Scene key="Settings" component={Settings} hideNavBar/>
            <Scene key="AddCard" component={AddCard} title="AddCard"/>
            <Scene key="QRScanner" component={QRScanner} title="QRScanner"/>
            <Scene key="DonationWell" component={DonationWell} title="DonationWell"/>
        </Scene>
      </Router>
    </Provider>
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
  },
});

// AppRegistry.registerComponent('WishingWell', () => WishingWell);
Expo.registerRootComponent(WishingWell);
