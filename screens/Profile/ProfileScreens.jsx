import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Profile from "./Profile";

const Stack = createStackNavigator();

export default function ProfileScreens() {
    return (<NavigationContainer independent={true}>
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
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>)
}