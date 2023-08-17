import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from '../Components/StylesTab'

import RewardScreen from "../Reward"
import PauseScreen from "../Pause"
import WordScreen from "../WordSearch"

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator tabBar={props=><tyles {...props}/>}>
        <Tab.Screen name="PauseScreen" component={PauseScreen}/>    
        <Tab.Screen name="RewardScreen" component={RewardScreen}/>    
        <Tab.Screen name="WordScreen" component={WordScreen}/>   
    </Tab.Navigator>
)