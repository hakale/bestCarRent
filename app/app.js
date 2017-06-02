



import React, { Component } from 'react';
import {TabNavigator } from 'react-navigation';
import HomePage from './HomeTab/views/homePage';
import ProbStackNavi from './ProfTab/ProbTab';
import CartStackNavi from './CartTab/CartTab';
import HomeStackNavi from './HomeTab/HomeTab'
import {
  action_login,
  action_logout,
  get_page_flow,
  login
}
from './reducers/action'
import { connect } from 'react-redux'


export const App = TabNavigator(
  {
    HOME: { screen: HomeStackNavi },
    Cart: {screen: CartStackNavi},
    Profile: { screen: ProbStackNavi },

  },
  {
    // tabBarPosition: 'bottom',
    tabBarOptions: {

    }
  }
)

export function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    login: (userinfo) => dispatch(login(userinfo)),
    action_login: (userinfo) => dispatch(action_login(userinfo)),
    action_logout: () => dispatch(action_logout()),
    get_page_flow: () => dispatch(get_page_flow())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
