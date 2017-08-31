import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'


const mapStateToProps = (state) => {
  return {
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email,
    photo: state.PhotoReducer.photo,
    bio: state.PhotoReducer.bio
  }
}

const rightButtonConfig = {
  title: 'Settings',
  handler() {
    Actions.Settings()
  },
  tintColor: 'black'
}

const leftButtonConfig = {
  title: 'Add Card',
  handler() {
    Actions.AddCard()
  },
  tintColor: 'black'
}

class Profile extends Component {

  render() {
    return (
      <View style={styles.body}>
          <View>
            <NavigationBar title={{title:'Profile'}} rightButton={rightButtonConfig} tintColor='#99ccff' leftButton={leftButtonConfig}/>
          </View>
        <View style={styles.text}>
          <Text style={styles.name}>
            <Image source={{ uri: this.props.photo }} style={styles.image}/>
            {this.props.firstname} {this.props.lastname}
          </Text>
          {this.props.username? <Text style={styles.username}>@{this.props.username}</Text> : null}
          <Text>Email: {this.props.email}</Text>
          <Text>Bio: {this.props.bio}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  text: {
    top: 35,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
  },
  image: { 
    top: 28,
    height: 100, 
    borderRadius: 50, 
    width: 100,
    backgroundColor: '#C0C0C0',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  username: {
    color: 'gray'
  }
})


export default connect(mapStateToProps)(Profile)
