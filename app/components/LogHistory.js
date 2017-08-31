import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import NavigationBar from 'react-native-navbar'
import * as firebase from 'firebase'
import { connect } from 'react-redux'

const db = firebase.database()

const mapStateToProps = (state) => {
  return {
    logs: state.SavingsReducer.entries
  }
}

class LogHistory extends Component {

  render() {
    return (
      <View>
        <View>
          <NavigationBar title={{title:'Savings'}} tintColor='#99ccff'/>
        </View>
          <View style={styles.body}>
              <FlatList
                data={this.props.logs}
                renderItem={({item}) => 
                  <View style={styles.list}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.amount}>${item.amount}</Text>
                  </View>
                }
              />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
    // top: 80
  },
  list: {
    borderBottomWidth: 0.5,
    borderColor: 'black',
    width: '100%',
    height: 70
  },
  description: {
    fontSize: 20,
    top: 5
  },
  amount: {
    textAlign: 'right', 
    alignSelf: 'stretch',
    top: 50
  }
})

export default connect(mapStateToProps)(LogHistory)