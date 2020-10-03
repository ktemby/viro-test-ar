'use strict';
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {
  //ViroScene,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroAmbientLight,
  ViroDirectionalLight,  
  ViroQuad,
  ViroParticleEmitter,
  ViroMaterials,
  Viro3DObject,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroPolygon,
  ViroBox,
  ViroNode,
  ViroVideo,
  ViroSpinner
} from 'react-viro';

export default class HelloWorldAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = { 
      text : "Initializing AR..."
    };  

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (


      <ViroARScene onTrackingUpdated={this._onInitialized} >

      <ViroAmbientLight color={"#aaaaaa"} />

     <ViroARPlaneSelector minHeight={.5} minWidth={.5}>

        <ViroPolygon rotation={[-90, 0, 0]}
             position={[0,0,-1]}
             vertices={[
                        [0,2],
                        [1,4],
                        [3,4],
                        [4,2],
                        [3,0],
                        [1,0]
                        ]}
             scale={[0.1, 0.1, 0.1]}
             materials={"eoh"}/>

      <ViroNode
        position={[0, 0 , -1]}
        rotation={[0, 0, 0]}
        scale={[.9, 0.9, 0.9]}
        dragType="FixedToWorld" onDrag={()=>{}} >

      <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 1.5, -3]} style={styles.helloWorldTextStyle} />

      <ViroDirectionalLight color="#FFFFFF"
          direction={[-.5, -2, -0.5]}
          shadowOrthographicPosition={[0, 0, 0]}
          shadowOrthographicSize={4}
          shadowFarZ={2}
          shadowNearZ={-1}
          shadowOpacity={1}
          castsShadow={true} />

      <ViroVideo
        source={require('./res/video/eyesonhives_12_25_19_11_35.mp4')}

          loop={true}
        position={[0., 0.71, -1]}
        scale={[0.54, 0.54, 0.54]} />

      <Viro3DObject
           source={require('./res/hive1/scoutb.obj')}
           resources={[require('./res/hive1/scoutbmtl.mtl'),
                       require('./res/hive1/cind.png'),
                       require('./res/hive1/eoh_cindv.png')]}
           position={[0.0, 0, 0]}
           scale={[1.3, 1.3, 1.3]}
           type="OBJ" />

      <Viro3DObject
           source={require('./res/hive1/hive1.obj')}
           resources={[require('./res/hive1/hive1mtl.mtl'),
                       require('./res/hive1/cind.png'),
                       require('./res/hive1/eoh_cind.png'),
                       require('./res/hive1/galv.png'),
                       require('./res/hive1/hivetex.png')]}
           position={[0.0, 0, -1]}
           scale={[1.3, 1.3, 1.3]}
           type="OBJ" />

      <ViroQuad
        position={[0, 0, 0]}
        rotation={[-90, 0, 0]}
        width={5} height={5}
        arShadowReceiver={true} />

      </ViroNode>

      </ViroARPlaneSelector>

      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Corner Hive!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  eoh: {
     diffuseTexture: require('./res/eoh_logo.png'),
   },
});

module.exports = HelloWorldAR;


