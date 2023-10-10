import React from 'react'
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens/stack/MainStack';
import MapScreen from './src/screens/Map';
import MainTab from './src/screens/stack/MainTab';

import LoadingScreen from './src/screens/Loading';






export default function App() {

  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 3000)
  }, [])

  return (

    <NavigationContainer>
      {isLoading ? (<LoadingScreen/>) : (<MainStack/>)}
    </NavigationContainer>

  )
}

