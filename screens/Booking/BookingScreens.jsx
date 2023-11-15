import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookingDetails from './BookingDetails';
import Booking from './Booking';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function BookingScreens(props) {
    return (
        <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Booking" screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          color: "black"
        },
        headerShown: true,
        headerBackImage: () => <Ionicons name="arrow-back" size={24} color="black" />
      }}>
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Details" component={BookingDetails}
        options={{
          headerShown: true
        }} />     
      </Stack.Navigator>
    </NavigationContainer>
    )
}