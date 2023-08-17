import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RewardScreen from "../Reward";
import PauseScreen from "../Pause";
import WordScreen from "../WordSearch";
 

const Stack = createStackNavigator();

export default () => (
    
    <Stack.Navigator 
        initialRouteName='RewardScreen'
        screenOptions={{
            headerShown: false
    }}>

        <Stack.Screen name="RewardScreen" component={RewardScreen}/>
        <Stack.Screen name="PauseScreen" component={PauseScreen}/>
        <Stack.Screen name="WordScreen" component={WordScreen}/>
    </Stack.Navigator>
)