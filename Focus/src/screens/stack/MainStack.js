import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import StartScreen from '../Start';
import WordScreen from '../WordSearch';
import RewardScreen from '../Reward';
import MainTab from './MainTab';
import PauseScreen from '../Pause';
import LevelScreen from '../Level';


const Stack = createStackNavigator();

export default () => (
    
  <Stack.Navigator 
      initialRouteName='Start'
      screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid
  }}>
      <Stack.Screen name="Start" component={StartScreen}/>
      <Stack.Screen name="MainTab" component={MainTab}/>
      <Stack.Screen name="Map" component={WordScreen}/>
      <Stack.Screen name="Reward" component={RewardScreen}/>
      <Stack.Screen name="Pause" component={PauseScreen}/>
      <Stack.Screen name = "Level" component={LevelScreen}/>
      <Stack.Screen name = "Game1" component={WordScreen}/>
  </Stack.Navigator>
)

