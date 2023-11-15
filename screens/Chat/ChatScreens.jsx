import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import ChatRoom from './ChatRoom';
import Chat from './Chat';

const Stack = createStackNavigator();

export default function ChatScreens() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Chat" screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          color: "black"
        },
        headerPressColor: {
          color: "black",
        },
        headerShown: true,
        headerBackImage: () => <Ionicons name="arrow-back" size={24} color="black" />
      }}>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Room" component={ChatRoom}
        options={{
          headerShown: true
        }} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}