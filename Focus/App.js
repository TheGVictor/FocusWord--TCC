import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Animated } from 'react-native'
import LoadingScreen from './src/screens/Loading/index.js';
import PauseScreen from './src/screens/Pause/index.js';
import RewardScreen from './src/screens/Reward/index.js';
import MainStack from './src/screens/stack/MainStack.js';
import MainTab from './src/screens/stack/MainTab.js';
import WordScreen from './src/screens/WordSearch/index.js';
import { NavigationContainer } from '@react-navigation/native';


export default function App(){
  return (
  
<NavigationContainer>
  <MainStack/>
</NavigationContainer>

  )
}