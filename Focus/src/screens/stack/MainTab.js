import React from "react"
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {CardStyleInterpolators} from '@react-navigation/stack'
import RewardScreen from "../Reward"
import PauseScreen from "../Pause"
import MapScreen from "../Map"

const Tab = createBottomTabNavigator()

export default function MainTab() {
    return(
    <Tab.Navigator initialRouteName="Mapa" screenOptions={{
        tabBarStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: 'absolute',
            height: 60,
            backgroundColor: '#0FC2C0'},
            tabBarLabelStyle: {
                fontWeight: '700',
                fontSize: '30',
                color: '#000'
            },

        
            }}>
        <Tab.Screen name="Max" component={PauseScreen} options={{headerShown: false, 
         tabBarIcon: ({focused}) => {
                if(focused) {
                    return <Image source = {require('../../images/tabBarIcons/maxIcon.png')} style = {{width: 65, height: 65, marginBottom: 20}}/>
                }
                return <Image source = {require('../../images/tabBarIcons/maxIcon.png')} style = {{width: 50, height: 50}}/>
            
        }}} />    
        <Tab.Screen name="Mapa" component={MapScreen} options={{headerShown: false,
                 tabBarIcon: ({focused}) => {
                    if(focused) {
                        return <Image source = {require('../../images/tabBarIcons/mapIcon.png')} style = {{width: 65, height: 65, marginBottom: 20}}/>
                    }
                    return <Image source = {require('../../images/tabBarIcons/mapIcon.png')} style = {{width: 50, height: 50}}/>
                
                
                }}}/>    
        <Tab.Screen name="Loja" component={RewardScreen} options={{headerShown: false,
            tabBarIcon: ({focused}) => {
                if(focused) {
                    return <Image source = {require('../../images/tabBarIcons/storeIcon.png')} style = {{width: 65, height: 65, marginBottom: 20}}/>
                }
                return <Image source = {require('../../images/tabBarIcons/storeIcon.png')} style = {{width: 50, height: 50}}/>
        }}}/>   
    </Tab.Navigator>
    )
}