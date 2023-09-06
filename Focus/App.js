import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens/stack/MainStack';
import MapScreen from './src/screens/Map';

export default function App(){
  return (
  
<NavigationContainer>
  <MapScreen/>
</NavigationContainer>

  )
}