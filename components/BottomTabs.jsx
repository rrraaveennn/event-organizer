import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BookingScreens from '../screens/Booking/BookingScreens';
import ChatScreens from '../screens/Chat/ChatScreens';


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 60,
        backgroundColor: "#22222f",
    },
    headerStyle: {
        backgroundColor: "#22222f"
    },
    headerTitleStyle: {
        color: "white"
    }
}

export default function BottomTabs({ safeContainer }) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen
                    name="Home"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <Entypo name="home" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        }
                    }}
                >
                    {() => <SafeAreaView style={safeContainer}>
                        <Home />
                    </SafeAreaView>}
                </Tab.Screen>

                {/* <Tab.Screen
                    name="Notification"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <Ionicons name="notifications" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        }
                    }}
                >
                    {() => <SafeAreaView style={safeContainer}>
                        <Notification />
                    </SafeAreaView>}
                </Tab.Screen> */}

                <Tab.Screen
                    name="Chat"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <Ionicons name="chatbubble" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        }
                    }}
                    component={ChatScreens}
                />

                <Tab.Screen
                    name="Booking"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <MaterialIcons name="book" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        },
                        headerShown: false
                    }}
                    component={BookingScreens}
                />

                <Tab.Screen
                    name="Profile"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <FontAwesome name="user-circle-o" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        },
                        headerShown: true
                    }}
                >
                    {() => <SafeAreaView style={safeContainer}>
                        <Profile />
                    </SafeAreaView>}
                </Tab.Screen>

        
            </Tab.Navigator>
        </NavigationContainer>
    );
}