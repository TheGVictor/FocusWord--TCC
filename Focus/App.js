import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens/stack/MainStack';
import MapScreen from './src/screens/Map';
import MainTab from './src/screens/stack/MainTab';
import LevelScreen from './src/screens/Levels/LevelOne';
import LoadingScreen from './src/screens/Loading';
import WordScreen from './src/screens/WordSearch';


export default function App(){
  return (
  
<NavigationContainer>

  <MainStack/>

</NavigationContainer>

  )
}