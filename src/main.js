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

var ROUTES = {
  login: Login,
  signup: Signup
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
        initialRoute={{name: 'signup'}}
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
