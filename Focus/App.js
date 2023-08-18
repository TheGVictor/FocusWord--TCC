import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Animated } from 'react-native'
import MainTab from './src/screens/stack/MainTab';
import { NavigationContainer } from '@react-navigation/native';


export default function App(){
  return (
  
<NavigationContainer>
  <MainTab/>
</NavigationContainer>

  )
}