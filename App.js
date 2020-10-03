/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViroLoader from "./src/ViroLoader";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Test Augmented Reality</Text>
      <Text style={styles.sectionDescription}>
      Tap the button to launch a Viro AR Demo {'\n\n'}
      </Text>
      <Button
        title="Go AR!"
        onPress={() => navigation.navigate('Viro')}
      />  
    </View>
  );  
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Viro" component={ViroLoader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});

