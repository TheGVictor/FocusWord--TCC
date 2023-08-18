import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import RewardScreen from "../Reward"
import PauseScreen from "../Pause"
import WordScreen from "../WordSearch"

const Tab = createBottomTabNavigator()

export default function MainTab() {
    return(
    <Tab.Navigator screenOptions={{tabBarStyle: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        backgroundColor: '#0FC2C0',
    }}}>
        <Tab.Screen name="Max" component={PauseScreen} options={{headerShown: false}} />    
        <Tab.Screen name="Mapa" component={RewardScreen} options={{headerShown: false}}/>    
        <Tab.Screen name="Loja" component={WordScreen} options={{headerShown: false}}/>   
    </Tab.Navigator>
    )
}