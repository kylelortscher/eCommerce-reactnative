import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Login from './components/login.js'
import Signup from './components/signup.js'
import ForgotPassword from './components/forgotpassword.js'
import Index from './components/index.js'
import HomePage from './components/homepage.js'

var ROUTES = {
  login: Login,
  signup: Signup,
  forgotpassword: ForgotPassword,
  index: Index,
  homepage: HomePage
};

module.exports = React.createClass({
  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render() {
    return(
      <Navigator
        style={styles.container}
        initialRoute={{name: 'homepage'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
