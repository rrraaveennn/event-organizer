import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatRoom from './ChatRoom';
import Chat from './Chat';

const Stack = createStackNavigator();

export default function ChatScreens() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Chat" screenOptions={{
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
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Room" component={ChatRoom}
        options={{
          headerShown: true
        }} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}