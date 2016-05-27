//THIS IS GOING TO BE THE HOMEPAGE AND LOGIN
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
      password: '',
      errorMessage: ''
    };
  },
  //Rendering The Components
  render() {
    return (
      <View style={styles.container}>
        {this.logo()}
        {this.emailInput()}
        {this.passwordInput()}
        {this.loginButton()}
        {this.linkToSignUp()}
        {this.linkToForgotPassword()}
        {this.linkToBrowse()}
      </View>
    );
  },
  //LOGO
  logo() {
    return(
      <Text style={styles.loginText}>eCommerce</Text>
    );
  },
  //Email Input
  emailInput() {
    return(
      <TextInput style={styles.textInput} value={this.state.email} placeholder="  Email Address">
      </TextInput>
    );
  },
  //Password
  passwordInput() {
    return(
      <TextInput style={styles.textInput} value={this.state.email} placeholder="  Password">
      </TextInput>
    );
  },
  //Login Button
  loginButton() {
    return(
      <TouchableHighlight style={styles.loginButton} onPress={() => this.props.navigator.push({name: 'index'})}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableHighlight>
    );
  },
  //Link To Signup
  linkToSignUp() {
    return(
      <TouchableHighlight onPress={() => this.props.navigator.push({name: 'signup'})}>
        <Text style={styles.linkToBrowse}>Sign Up!</Text>
      </TouchableHighlight>
    );
  },
  //Link To ForgotPassword
  linkToForgotPassword() {
    return(
      <TouchableHighlight onPress={() => this.props.navigator.push({name: 'forgotpassword'})}>
        <Text style={styles.linkToBrowse}>Forgot Password</Text>
      </TouchableHighlight>
    );
  },
  //On Signup Press
  //Link To Browse
  linkToBrowse() {
    return(
      <TouchableHighlight onPress={() => this.props.navigator.push({name: 'index'})}>
        <Text style={styles.linkToBrowse}>Just Browse</Text>
      </TouchableHighlight>
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
  loginText: {
    fontSize: 32,
    margin: 10,
    fontWeight: '900',
    color: '#ecf0f1'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  loginButton: {
    height: 50,
    width: 150,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    alignItems: 'center'
  },
  linkToBrowse: {
    fontSize: 13,
    textDecorationLine: 'underline',
    color: 'white',
    alignItems: 'center',
    marginTop: 10
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
