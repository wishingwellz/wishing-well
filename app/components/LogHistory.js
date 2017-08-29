import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as firebase from 'firebase'


const db = firebase.database()

export default class LogHistory extends Component {
  componentWillMount() {
    //store the data to state/store
    const ref = db.ref('logs')
    ref.on('value', (result) => {
      console.log(result.val())
    }, (err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <View style={styles.body}>
        <Text>This is LogHistory page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})