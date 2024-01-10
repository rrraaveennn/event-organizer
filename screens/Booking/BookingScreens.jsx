import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookingDetails from './BookingDetails';
import Booking from './Booking';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-provider';
import { View, Text } from "react-native";
import DarkMode from '../../components/DarkMode';

const Stack = createStackNavigator();

export default function BookingScreens(props) {
  const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Booking" screenOptions={{
        headerStyle: {
          backgroundColor: theme.color,
        },
        headerTitleStyle: {
          color: theme.type == "light" ? "#434d56": theme.opposite
        },
        headerShown: true,
        headerBackImage: () => <Ionicons name="arrow-back" size={24} color={theme.opposite} />
      }}>
          <Stack.Screen name="Bookings" component={Booking} options={{
          header: ({ navigation, route, options }) => {
            const title = route.name;
            
            return <View style={{
              backgroundColor: theme.color,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
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
        }} />
        <Stack.Screen name="Details" component={BookingDetails}
        options={{
          headerShown: true
        }} />     
      </Stack.Navigator>
    </NavigationContainer>
    )
}