import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import ChatRoom from './ChatRoom';
import Chat from './Chat';
import { Text, View } from 'react-native';
import { useContext } from 'react';
import DarkMode from '../../components/DarkMode';
import { ThemeContext } from '../../contexts/theme-provider';

const Stack = createStackNavigator();

export default function ChatScreens() {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Chat" screenOptions={{
        headerStyle: {
          backgroundColor: theme.color,
        },
        headerTitleStyle: {
          color: theme.type == "light" ? "#434d56": theme.opposite
        },
        headerPressColor: {
          color: "black",
        },
        headerShown: true,
        headerBackImage: () => <Ionicons name="arrow-back" size={24} color={theme.opposite} />
      }}>
        <Stack.Screen name="Chat" component={Chat} options={{
          _header: ({ navigation, route, options }) => {
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
                color: theme.type == "light" ? "#434d56" : theme.opposite
              }}>
                {title}
              </Text>
              <DarkMode />
            </View>;
          },
          get header() {
            return this._header;
          },
          set header(value) {
            this._header = value;
          },
        }} />
        <Stack.Screen name="Room" component={ChatRoom}
        options={{
          headerShown: true,
          
        }} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}