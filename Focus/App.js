import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import LoadingScreen from './src/screens/Loading';
import PauseScreen from './src/screens/Pause/index.js';

export default function App(){
  return (
    <PauseScreen/>
  )
}