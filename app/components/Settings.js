import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import { ImagePicker } from 'expo'
import { Form, Separator, InputField, LinkField, SwitchField, PickerField} from 'react-native-form-generator';
import { connect } from 'react-redux';
import { setUserInfo } from '../Actions/Profile/ProfileAction'

const mapStateToProps = (state) => {
  return {
    username: state.ProfileReducer.username,
    firstname: state.ProfileReducer.firstname,
    lastname: state.ProfileReducer.lastname,
    email: state.ProfileReducer.email  }
}

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings'
  };
  constructor(props) {
    super(props)
    this.state={
      image: null,
      formData: {}
    }
    this.handleOnSave = this.handleOnSave.bind(this)
  }

  handleFormChange(formData){
    this.state.formData= formData
  }

  handleFormFocus(e, component){
    //console.log(e, component);
  }
  
  handleOnSave() {
    this.props.setUserInfo(this.state.formData)
  }

  render() {
    let { image } = this.state;    
    return (
      <View>
       <View style={styles.body}>
        {image &&
          <Image source={{ uri: image }} onPress={this._pickImage} style={styles.image} />}
        <Button
            title="Change Profile Photo"
            onPress={this._pickImage}
          />
       </View>
       <Form
          style={styles.form}
          ref='registrationForm'
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Personal Information" >
        <Separator/>
        <InputField
            ref='username'
            label='Username'
            placeholder='Username'
            value={this.props.username}
          />
        <InputField
            ref='firstname'
            label='First Name'
            placeholder='First Name'
            value={this.props.firstname}
          />

        <InputField
            ref='lastname'
            label='Last Name'
            placeholder='Last Name'
            value={this.props.lastname}
          />

        <InputField
            ref='email'
            label='Email'
            placeholder='Email'
            value={this.props.email}
          />
        </Form>
        <Button
          title="save"
          onPress={() => this.handleOnSave()}
        ></Button>
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
};

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
  },
  form: {
    // flex: 1
  }
});

export default connect(mapStateToProps, { setUserInfo })(Settings);
