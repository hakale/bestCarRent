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
  View,
  ListView,
  ScrollView,
  Image
} from 'react-native';
import {Tab} from './app/router'

export default class bestCarRent extends Component{
  render() {
    return (<Tab />);
  }
}
AppRegistry.registerComponent('bestCarRent', () => bestCarRent);
