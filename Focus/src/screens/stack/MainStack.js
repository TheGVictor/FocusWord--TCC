import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import StartScreen from '../Start';
import RewardScreen from '../Reward';
import MainTab from './MainTab';
import PauseScreen from '../Pause';

// importação dos níveis
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

// importação dos games de cada fase
import WordScreenOne from '../Levels/LevelOne/game01';
import WordScreenTwo from '../Levels/LevelTwo/game02';
import WordScreenThree from '../Levels/LevelThree/game03';
import WordScreenFour from '../Levels/LevelFour/game04';
import WordScreenFive from '../Levels/LevelFive/game05';
import WordScreenSix from '../Levels/LevelSix/game06';
import WordScreenSeven from '../Levels/LevelSeven/game07';
import WordScreenEight from '../Levels/LevelEight/game08';
import WordScreenNine from '../Levels/LevelNine/game09';
import WordScreenTen from '../Levels/LevelTen/game10';
import WordScreenEleven from '../Levels/LevelEleven/game11';
import WordScreenTwelve from '../Levels/LevelTwelve/game12';
import WordScreenThirteen from '../Levels/LevelThirteen/game13';
import WordScreenFourteen from '../Levels/LevelFourteen/game14';
import WordScreenFifteen from '../Levels/LevelFifteen/game15';



const Stack = createStackNavigator();

export default () => (

    <Stack.Navigator
        initialRouteName='Start'
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "vertical",
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
        }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Reward" component={RewardScreen} />
        <Stack.Screen name="Pause" component={PauseScreen} />
        <Stack.Screen name="LevelOne" component={LevelScreenOne} />
        <Stack.Screen name="GameOne" component={WordScreenOne} />
        <Stack.Screen name="LevelTwo" component={LevelScreenTwo} />
        <Stack.Screen name="GameTwo" component={WordScreenTwo} />
        <Stack.Screen name="LevelThree" component={LevelScreenThree} />
        <Stack.Screen name="GameThree" component={WordScreenThree} />
        <Stack.Screen name="LevelFour" component={LevelScreenFour} />
        <Stack.Screen name="GameFour" component={WordScreenFour} />
        <Stack.Screen name="LevelFive" component={LevelScreenFive} />
        <Stack.Screen name="GameFive" component={WordScreenFive} />
        {/* <Stack.Screen name = "SpecialLevelOne" component={LevelScreen}/> */}
        <Stack.Screen name="LevelSix" component={LevelScreenSix} />
        <Stack.Screen name="GameSix" component={WordScreenSix} />
        <Stack.Screen name="LevelSeven" component={LevelScreenSeven} />
        <Stack.Screen name="GameSeven" component={WordScreenSeven} />
        <Stack.Screen name="LevelEight" component={LevelScreenEight} />
        <Stack.Screen name="GameEight" component={WordScreenEight} />
        <Stack.Screen name="LevelNine" component={LevelScreenNine} />
        <Stack.Screen name="GameNine" component={WordScreenNine} />
        <Stack.Screen name="LevelTen" component={LevelScreenTen} />
        <Stack.Screen name="GameTen" component={WordScreenTen} />
        {/* <Stack.Screen name = "SpecialLevelTwo" component={LevelScreen}/> */}
        <Stack.Screen name="LevelEleven" component={LevelScreenEleven} />
        <Stack.Screen name="GameEleven" component={WordScreenEleven} />
        <Stack.Screen name="LevelTwelve" component={LevelScreenTwelve} />
        <Stack.Screen name="GameTwelve" component={WordScreenTwelve} />
        <Stack.Screen name="LevelThirteen" component={LevelScreenThirteen} />
        <Stack.Screen name="GameThirteen" component={WordScreenThirteen} />
        <Stack.Screen name="LevelFourteen" component={LevelScreenFourteen} />
        <Stack.Screen name="GameFourteen" component={WordScreenFourteen} />
        <Stack.Screen name="LevelFifteen" component={LevelScreenFifteen} />
        <Stack.Screen name="GameFifteen" component={WordScreenFifteen} />
        {/* <Stack.Screen name = "SpecialLevelThree" component={LevelScreen}/> */}
    </Stack.Navigator>
)

