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

var Swiper = require('react-native-swiper');

module.exports = React.createClass({
  render() {
    return(
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <View style={styles.blankSpace}>
          </View>
          <View style={styles.bottomCall}>
            <Text style={styles.text}>Buy Your Favorite Products For Cheap!</Text>
            <TouchableHighlight style={styles.ctaButton} onPress={() => this.props.navigator.push({name: 'login'})}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
});

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  blankSpace: {
    flex: 5
  },
  bottomCall: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 125,
    backgroundColor: 'red',
    borderRadius: 4
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: 'white',
    fontSize: 22,
    marginRight: 30,
    marginLeft: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
