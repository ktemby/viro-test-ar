import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import { AppRegistry,Text, View, StyleSheet} from 'react-native';
import {ViroARSceneNavigator} from 'react-viro';

// Sets the default scene you want for AR and VR
var InitialARScene = require('./HelloWorldAR');


export default class ViroLoader extends Component {
  constructor() {
    super();
    this.state = { 
      navigatorType : "AR"
    }   
  }

  render() {
    return(
    <ViroARSceneNavigator {...this.state}
    initialScene={{scene: InitialARScene}} />
    );  
  }
}



