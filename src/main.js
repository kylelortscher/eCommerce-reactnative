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

var ROUTES = {
  login: Login
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
        initialRoute={{name: 'login'}}
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
