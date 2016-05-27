'use strict';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    };
  },
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.hello}>
        Test
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello: {
    fontSize: 23,
    textAlign: 'center'
  }
});
