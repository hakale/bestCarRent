import React, { Component } from 'react';
import {TabNavigator } from 'react-navigation';
import HomePage from './HomeTab/views/homePage';
import ProbStackNavi from './ProfTab/ProbTab';
import CartStackNavi from './CartTab/CartTab';
import HomeStackNavi from './HomeTab/HomeTab'
export const Tab = TabNavigator(
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
);
