import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact';
import { Video } from './app/views/Video';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen  name = "Home" component = { Home } />
        <Stack.Screen  name = "Contact" component = { Contact } />
        <Stack.Screen  name = "Video" component = { Video } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
