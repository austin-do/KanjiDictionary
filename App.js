import React from 'react';
import Home from './app/components/Home';
import Draw from './app/components/Draw';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
  Home: Home,
  Draw: Draw
  },
  {initialRouteName: 'Home'},
);

const AppContainer = createAppContainer(AppNavigator);