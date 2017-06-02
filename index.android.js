/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import App from './app/app'



const store = configureStore()


const bestCarRent = () => (
  <Provider store={store}>
    <App {...this.props}/>
  </Provider>
)

AppRegistry.registerComponent('bestCarRent', () => bestCarRent);
