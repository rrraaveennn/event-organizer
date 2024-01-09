import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from "react-native";

import Profile from "./Profile";
import FeedBackDetails from '../../components/FeedBackDetails';
import FeedBack from '../../components/FeedBack';
import DarkMode from '../../components/DarkMode';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-provider';

const Stack = createStackNavigator();

export default function ProfileScreens() {
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
        <Stack.Screen name="Profile" component={Profile} options={{
         header: ({ navigation, route, options }) => {
            const title = route.name;
            
            return <View style={{
              backgroundColor: theme.color,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              height: 55
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
        />
        <Stack.Screen name="FeedBackDetails" component={FeedBackDetails} />
      </Stack.Navigator>
    )
}