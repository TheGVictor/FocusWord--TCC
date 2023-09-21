import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import StartScreen from '../Start';
import WordScreen from '../WordSearch';
import RewardScreen from '../Reward';
import MainTab from './MainTab';
import PauseScreen from '../Pause';
import LevelScreenOne from '../Levels/LevelOne';
import LevelScreenTwo from '../Levels/LevelTwo';
import LevelScreenThree from '../Levels/LevelThree';
import LevelScreenFour from '../Levels/LevelFour';
import LevelScreenFive from '../Levels/LevelFive';
import LevelScreenSix from '../Levels/LevelSix';
import LevelScreenSeven from '../Levels/LevelSeven';
import LevelScreenEight from '../Levels/LevelEight';
import LevelScreenNine from '../Levels/LevelNine';
import LevelScreenTen from '../Levels/LevelTen';
import LevelScreenEleven from '../Levels/LevelEleven';
import LevelScreenTwelve from '../Levels/LevelTwelve';
import LevelScreenThirteen from '../Levels/LevelThirteen';
import LevelScreenFourteen from '../Levels/LevelFourteen';
import LevelScreenFifteen from '../Levels/LevelFifteen';


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
      <Stack.Screen name = "LevelOne" component={LevelScreenOne}/>
      <Stack.Screen name = "LevelTwo" component={LevelScreenTwo}/>
      <Stack.Screen name = "LevelThree" component={LevelScreenThree}/>
      <Stack.Screen name = "LevelFour" component={LevelScreenFour}/>
      <Stack.Screen name = "LevelFive" component={LevelScreenFive}/>
        {/* <Stack.Screen name = "SpecialLevelOne" component={LevelScreen}/> */}
      <Stack.Screen name = "LevelSix" component={LevelScreenSix}/>
      <Stack.Screen name = "LevelSeven" component={LevelScreenSeven}/>
      <Stack.Screen name = "LevelEight" component={LevelScreenEight}/>
      <Stack.Screen name = "LevelNine" component={LevelScreenNine}/>
      <Stack.Screen name = "LevelTen" component={LevelScreenTen}/>
        {/* <Stack.Screen name = "SpecialLevelTwo" component={LevelScreen}/> */}
      <Stack.Screen name = "LevelEleven" component={LevelScreenEleven}/>
      <Stack.Screen name = "LevelTwelve" component={LevelScreenTwelve}/>
      <Stack.Screen name = "LevelThirteen" component={LevelScreenThirteen}/>
      <Stack.Screen name = "LevelFourteen" component={LevelScreenFourteen}/>
      <Stack.Screen name = "LevelFifteen" component={LevelScreenFifteen}/>
        {/* <Stack.Screen name = "SpecialLevelThree" component={LevelScreen}/> */}
      <Stack.Screen name = "Game1" component={WordScreen}/>
  </Stack.Navigator>
)

