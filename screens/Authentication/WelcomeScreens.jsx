import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Verification from './Verification';
import BottomTabs from '../../components/BottomTabs';
import { StatusBar } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-provider';


const Stack = createStackNavigator();

function WelcomeScreens() {
  const { theme } = useContext(ThemeContext);

  return (<>
      <StatusBar
          animated
          backgroundColor={theme.color}
          currentHeight
          barStyle={theme.type == "light" ? "dark-content": "light-content"}
      />
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Welcome'
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verify" component={Verification} />
        <Stack.Screen name="Main Menu" component={BottomTabs} />
      </Stack.Navigator> 
    </NavigationContainer>
    </>
  );
}

export default WelcomeScreens;