import { SafeAreaView, View, Image, Text } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function TestScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    );
  }

const HomeStack = createStackNavigator();

function StackScreenOne() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function StackScreenTwo() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const TestStack = createStackNavigator();

function StackScreenThree() {
  return (
    <TestStack.Navigator>
      <TestStack.Screen name="Test" component={TestScreen} />
    </TestStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function RewardScreen() {
    return(

        <View style = {styles.container}>


            <SafeAreaView style = {styles.header}> 
                    <Text style = {styles.headerText}>Recompensas</Text>
                      <TouchableOpacity style = {styles.buttonMenuIcon}
                        activeOpacity={0.5}>
                           <Image
                           style = {styles.menuIcon}
                           source = {require('../../images/Tela de recompensas/config.png')}/>
                    </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style = {styles.rewardsArea}>

                    {/* Camisas */}
                        
                        <Text style = {styles.rewardAreaText}>Camisas</Text>

                        <View style = {styles.rewardArea}>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity> 

                        <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.reward}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/nivel01.png')}
                            style = {styles.clothLocked}/>
                            <Text style = {styles.rewardText}>Moletom</Text>
                        </TouchableOpacity>
                        </View>

                        <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.reward}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/nivel01.png')}
                            style = {styles.clothLocked}/>
                            <Text style = {styles.rewardText}>Moletom</Text>
                        </TouchableOpacity>
                        </View>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity>

                        </View>


                    {/* Calças */}
                        <Text style = {styles.rewardAreaText}>Calças</Text>
                        <View style = {styles.rewardArea}>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity> 
                        
                            <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.rewardUnlocked}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/esboço_calca.png')}
                            style = {styles.clothUnlocked}/>
                            <Text style = {styles.rewardText}>Nível 02</Text>
                        </TouchableOpacity>
                        </View>

                        <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.rewardUnlocked}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/esboço_calca.png')}
                            style = {styles.clothUnlocked}/>
                            <Text style = {styles.rewardText}>Nível 02</Text>
                        </TouchableOpacity>
                        </View>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity> 

                        </View>
                    {/* Tenis */}
                        <Text style = {styles.rewardAreaText}>Tênis</Text>
                        <View style = {styles.rewardArea}>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity> 

                        <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.rewardUnlocked}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/esboço_tenis.png')}
                            style = {styles.clothUnlocked}/>
                            <Text style = {styles.rewardText}>Nível 03</Text>
                        </TouchableOpacity>
                        </View>


                        <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.rewardUnlocked}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/esboço_tenis.png')}
                            style = {styles.clothUnlocked}/>
                            <Text style = {styles.rewardText}>Nível 03</Text>
                        </TouchableOpacity>
                        </View>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity> 

                        </View>
                    {/* Especial */}
                        <Text style = {styles.rewardAreaText}>Especial</Text>
                        <View style = {styles.rewardArea}>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_esquerda.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity> 

                        <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.rewardUnlocked}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/nivel01.png')}
                            style = {styles.clothUnlocked}/>
                            <Text style = {styles.rewardText}>Nível 06</Text>
                        </TouchableOpacity>
                        </View>

                        <View style = {styles.secondBackground}>
                        <TouchableOpacity style = {styles.rewardUnlocked}>
                            <Image
                            source = {require('../../images/Tela de recompensas/clothes/nivel01.png')}
                            style = {styles.clothUnlocked}/>
                            <Text style = {styles.rewardText}>Nível 06</Text>
                        </TouchableOpacity>
                        </View>

                        <TouchableOpacity style = {styles.rightArrow}>
                        <Image
                            source = {require('../../images/Tela de recompensas/clothes/seta_direita.png')}
                            style = {styles.arrow}/>  
                        </TouchableOpacity> 

                </View>
            </SafeAreaView>

            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Home" component={StackScreenOne} />
                     <Tab.Screen name="Settings" component={StackScreenTwo} />
                     <Tab.Screen name="Test" component={StackScreenThree} />
                </Tab.Navigator>
            </NavigationContainer>
            
        </View>

        

        

    )

    }

