/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class eCommerce extends Component {
  //Setting The State
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }
  //Rendering The Components
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>
          Log Into React eCommerce
        </Text>
        {this.emailInput()}
        {this.passwordInput()}
      </View>
    );
  }
  //Email Input
  emailInput() {
    return(
      <TextInput style={styles.textInput} value={this.state.email} placeholder="  Email Address">
      </TextInput>
    );
  }
  passwordInput() {
    return(
      <TextInput style={styles.textInput} value={this.state.email} placeholder="  Password">
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  loginText: {
    fontSize: 22,
    margin: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('eCommerce', () => eCommerce);
