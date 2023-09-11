import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens/stack/MainStack';
import MapScreen from './src/screens/Map';
import MainTab from './src/screens/stack/MainTab';
import LevelScreen from './src/screens/Level';
import LoadingScreen from './src/screens/Loading';

export default function App(){
  return (
  
<NavigationContainer>
  <LevelScreen/>
</NavigationContainer>

  )
}