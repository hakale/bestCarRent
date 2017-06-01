/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {combineReducers} from 'redux';
import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image
} from 'react-native';
import {userAction} from './app/reducers/reducers'
import {Tab} from './app/router'


const appReducer = combineReducers({
  nav: userAction
});

const store = createStore(appReducer);

function mapSateToProps(state) {
    return {
        state: state
    }
}

class App extends Component {
  render() {
    return (
      <Tab navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}
const AppWithNavigationState =  connect(mapSateToProps) (App)


class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default class bestCarRent extends Component{
  render() {
    return (<Tab />);
  }
}

AppRegistry.registerComponent('bestCarRent', () => bestCarRent);
