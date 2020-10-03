/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */


'use strict';

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { assetExts }
  } = await getDefaultConfig();

  return {
    resolver: {
      assetExts: [...assetExts, "png", "mp4", "obj", "mtl", "JPG", "vrx", "hdr", "gltf", "glb", "GLB", "bin", "arobject", "gif"]
    }   
  };  
})();

/*
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
*/
