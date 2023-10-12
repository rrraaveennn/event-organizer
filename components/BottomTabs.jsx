import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Chat from '../screens/Chat';
import Notification from '../screens/Notification';
import Booking from '../screens/Booking';


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: true,
    tabBarStyle: {
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 60,
        backgroundColor: "#22222f",
    },
    header: ({ navigation, route, options }) => {
        const title = route.name;
        
        return <View style={styles.header}>
            <StatusBar backgroundColor={'#22222f'} barStyle={'light-content'} />
            <Text style={styles.headerTitle}>
                {title}
            </Text>
        </View>
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

                <Tab.Screen
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
                </Tab.Screen>

                <Tab.Screen
                    name="Chat"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <Ionicons name="chatbubble" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        }
                    }}
                >
                    {() => <SafeAreaView style={safeContainer}>
                        <Chat />
                    </SafeAreaView>}
                </Tab.Screen>

                <Tab.Screen
                    name="Booking"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <MaterialIcons name="book" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        }
                    }}
                >
                    {() => <SafeAreaView style={safeContainer}>
                        <Booking />
                    </SafeAreaView>}
                </Tab.Screen>

                <Tab.Screen
                    name="Profile"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <FontAwesome name="user-circle-o" size={24} color={focused ? "#443cff" : "#f6f7f9"} />
                            </View>
                        }
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

const styles = StyleSheet.create({
    header: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 0,
        backgroundColor: '#22222f',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f6f7f9'
    }
})