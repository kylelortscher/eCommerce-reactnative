'use strict';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

import Login from '../components/login'

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
        {this.logo()}
        {this.emailInput()}
        {this.passwordInput()}
        {this.passwordConfirmationInput()}
        {this.signUpButton()}
        {this.loginLink()}
      </View>
    );
  },
  logo() {
    return(
      <Text style={styles.hello}>Signup</Text>
    );
  },
  emailInput() {
    return(
      <TextInput
      style={styles.textInput}
      value={this.state.email}
      onChangeText={(text) => this.setState({email: text})}
      placeholder="Email Address">
      </TextInput>
    );
  },
  passwordInput() {
    return(
      <TextInput
      style={styles.textInput}
      value={this.state.password}
      secureTextEntry={true}
      onChangeText={(text) => this.setState({password: text})}
      placeholder="Password">
      </TextInput>
    );
  },
  passwordConfirmationInput() {
    return(
      <TextInput
      style={styles.textInput}
      value={this.state.passwordConfirmation}
      secureTextEntry={true}
      onChangeText={(text) => this.setState({passwordConfirmation: text})}
      placeholder="Password Confirmation">
      </TextInput>
    );
  },
  signUpButton() {
    return(
      <TouchableHighlight style={styles.signUpButton} onPress={() => this.onSignUpPress()}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableHighlight>
    );
  },
  onSignUpPress() {
    if(this.state.password == '') {
      return(
        AlertIOS.alert(
          'Empty Password',
          'Please enter a password!'
        )
      )
    }
    return(
        () => this.props.navigator.push({name: 'homepage'})
    );
  },
  loginLink() {
    return(
        <TouchableHighlight onPress={this.onLoginLinkPress()}>
          <Text style={styles.linkToBrowse}>Log In!</Text>
        </TouchableHighlight>
    );
  },
  onLoginLinkPress() {
    return(
        () => this.props.navigator.push({name: 'login'})
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
    fontSize: 32,
    margin: 10,
    fontWeight: '900',
    color: '#ecf0f1'
  },
  signUpButton: {
    height: 50,
    width: 150,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  linkToBrowse: {
    fontSize: 13,
    textDecorationLine: 'underline',
    color: 'white',
    alignItems: 'center',
    marginTop: 10
  },
  loginText: {
    fontSize: 23,
    color: 'white'
  }
});
