# viroTestAr
Test App for Viro (AR only)

## Purpose
The purpose of this app is to make the simplest viro app possible.

## Tenets
1. Minimize custom configuration
2. Keep it simple

## How was this made?
React native project started

    npx react-native init viroTestAr
    
### Dependencies for a basic app installed

    npm install @react-navigation/native
    npm install @react-navigation/stack
    npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
    npm install git+https://github.com/ktemby/viro

### iOS cocoapods setup

https://docs.viromedia.com/docs/no_use_frameworks

Add the following two lines to the ios/Podfile

    pod 'ViroReact', :path => '../node_modules/react-viro/ios/'
    pod 'ViroKit_static_lib', :path => '../node_modules/react-viro/ios/dist/ViroRenderer/static_lib'

    npx pod-install ios
    
    
