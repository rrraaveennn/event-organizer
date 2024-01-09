import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from "react-native";

import DarkMode from '../../components/DarkMode';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-provider';
import Home from './Home';
import Categories from './Categories';
import Organizers from './Organizers';

const Stack = createStackNavigator();

export default function HomeScreens() {
  const { theme } = useContext(ThemeContext);

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            color: "black"
        },
          headerShown: true,
          headerBackImage: () => <Ionicons name="arrow-back" size={24} color="black" />
        }}>
        <Stack.Screen name="Home" component={Home}
                options={{
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
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Organizers" component={Organizers} />
      </Stack.Navigator>
    )
}