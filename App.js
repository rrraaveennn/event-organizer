import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Profile from './screens/Profile';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Chat from './screens/Chat';
import Notification from './screens/Notification';


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
    background: "#f6f7f9"
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({focused}) => {
              return <View>
                <Entypo name="home" size={24} color={focused ? "#443cff": "#22222f"} />
              </View>
            }
          }}
        >
          {() => <SafeAreaView style={styles.safeContainer}>
            <Home />
          </SafeAreaView>}
        </Tab.Screen>

        <Tab.Screen
          name="Notification"
          options={{
            tabBarIcon: ({focused}) => {
              return <View>
                <Ionicons name="notifications" size={24} color={focused ? "#443cff": "#22222f"} />
              </View>
            }
          }}
        >
          {() => <SafeAreaView style={styles.safeContainer}>
            <Notification />
          </SafeAreaView>}
        </Tab.Screen>

        <Tab.Screen
          name="Chat"
          options={{
            tabBarIcon: ({focused}) => {
              return <View>
                <Ionicons name="chatbubble" size={24} color={focused ? "#443cff": "#22222f"} />
              </View>
            }
          }}
        >
          {() => <SafeAreaView style={styles.safeContainer}>
            <Chat />
          </SafeAreaView>}
        </Tab.Screen>

        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({focused}) => {
              return <View>
                <FontAwesome name="user-circle-o" size={24} color={focused ? "#443cff": "#22222f"} />
              </View>
            }
          }}
        >
          {() => <SafeAreaView style={styles.safeContainer}>
            <Profile />
          </SafeAreaView>}
        </Tab.Screen>

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
      paddingTop: 26,
      backgroundColor: "#f6f7f9"
  }
})