import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from "react-native";

import DarkMode from '../../components/DarkMode';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-provider';
import UserServiceProfile from './UserServiceProfile';
import Home from '../Home/Home';

const Stack = createStackNavigator();

export default function UserServiceProfileScreens() {
  const { theme } = useContext(ThemeContext);

    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            color: "black"
        },
          headerShown: true,
          headerBackImage: () => <Ionicons name="arrow-back" size={24} color="black" />
        }}>
        {/* <Stack.Screen name="UserServiceProfile" component={UserServiceProfile} options={{
         header: ({ navigation, route, options }) => {
            const title = route.name;
            
            return <View style={{
              backgroundColor: theme.color,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 30 
            }}>
              <Text style={{
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
                color: theme.type == "light" ? "#434d56": theme.opposite
              }}>
                    {title}
              </Text>
              <DarkMode />
            </View>
          },
        }}
            /> */}
      </Stack.Navigator>
    )
}