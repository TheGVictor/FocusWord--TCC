import React from 'react'
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens/stack/MainStack';
import MapScreen from './src/screens/Map';
import MainTab from './src/screens/stack/MainTab';
import Screenfifty from './src/screens/Levels/Level15/game15'
import LoginEmailScreen from './src/screens/Login/year';
import LoadingScreen from './src/screens/Loading';
import StartScreen from './src/screens/Start';

export default function App() {

  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 3500)
  }, [])

  return (

    <NavigationContainer>
      {isLoading ? (<LoadingScreen/>) : (<StartScreen/>)}
    </NavigationContainer>

  )
}

