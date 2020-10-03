import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import { AppRegistry,Text, View, StyleSheet} from 'react-native';
import {ViroARSceneNavigator} from 'react-viro';

// Sets the default scene you want for AR and VR
//var InitialARScene = require('./HelloWorldAR');

var sharedProps = { 
apiKey:"API_KEY_HERE",
}

export default class ViroLoader extends Component {
  constructor() {
    super();
    this.state = { 
      navigatorType : "AR",
      sharedProps : sharedProps
    }   
  }

  render() {
    return(
      <View><Text>hi</Text></View>
    );  
  }
}

    //<ViroARSceneNavigator {...this.state.sharedProps}
    //initialScene={{scene: InitialARScene}} />

