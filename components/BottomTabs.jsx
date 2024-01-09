import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BookingScreens from '../screens/Booking/BookingScreens';
import ChatScreens from '../screens/Chat/ChatScreens';
import ProfileScreens from '../screens/Profile/ProfileScreens';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-provider';
import HomeScreens from '../screens/Home/HomeScreens';


const Tab = createBottomTabNavigator();



export default function BottomTabs({ navigation }) {
    const { theme } = useContext(ThemeContext);

    const screenOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            height: 60,
            backgroundColor: theme.color,
        },
        header: ({ navigation, route, options }) => {
            const title = route.name;
            
            return <View style={{
                ...styles.header
            }}>
                <Text style={styles.headerTitle}>
                    {title}
                </Text>
            </View>
        },
    }

    return (
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen
                    name="HomeScreens"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <Entypo name="home" size={24} color={focused ? "#443cff" : theme.opposite} />
                            </View>
                        }
                    }}
                component={HomeScreens}
                />

                <Tab.Screen
                    name="Chat"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <Ionicons name="chatbubble" size={24} color={focused ? "#443cff" : theme.opposite} />
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
                                <MaterialIcons name="book" size={24} color={focused ? "#443cff" : theme.opposite} />
                            </View>
                        },
                        headerShown: false
                    }}
                    component={BookingScreens}
                />

                <Tab.Screen
                    name="ProfileScreens"
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <View>
                                <FontAwesome name="user-circle-o" size={24} color={focused ? "#443cff" : theme.opposite} />
                            </View>
                        },
                        headerShown: false
                    }}
                    component={ProfileScreens}
                />

        
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})
