import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookingDetails from './BookingDetails';
import Booking from './Booking';

const Stack = createStackNavigator();

export default function BookingScreens(props) {
    return (
        <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Booking" screenOptions={{
        headerStyle: {
          backgroundColor: '#22222f',
        },
        headerTitleStyle: {
          color: "white"
        },
        headerPressColor: {
          color: "white"
        },
        headerShown: true
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