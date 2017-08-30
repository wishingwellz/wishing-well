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
  handler: () => Actions.Settings(),
};

class Profile extends Component {

  render() {
    return (
      <View style={styles.body}>
          <View>
            <NavigationBar
              title='Profile'
              rightButton={rightButtonConfig}
            />
          </View>
          <View style={styles.imageView} >
            <Image source={{ uri: this.props.photo }} style={styles.image}/>
          </View>
        <View style={styles.text}>
          <Text>@{this.props.username}</Text>
          <Text>{this.props.firstname}</Text>
          <Text>{this.props.lastname}</Text>
          <Text>Email: {this.props.email}</Text>
          <Text>Bio: {this.props.bio}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',    
  },
  body: {
    // backgroundColor: '#FFFFFF',
  },
  image: { 
    top: 28,
    height: 100, 
    borderRadius: 50, 
    width: 100,
    backgroundColor: '#C0C0C0',
  },
  imageView: {
    marginLeft: 15,
    // backgroundColor: '#FFFFFF',
    
  }
})

export default connect(mapStateToProps, null)(Profile)