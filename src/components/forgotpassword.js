'use strict';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return {
      email: '',
    };
  },
  render() {
    return(
      <View style={styles.container}>
        {this.logo()}
      </View>
    );
  },
  logo() {
    return(
      <Text style={styles.loginText}>ForgotPassword</Text>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  hello: {
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center'
  },
  loginText: {
    fontSize: 23,
    color: 'white'
  }
});
