import BottomTabs from './components/BottomTabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import ThemeProvider, { ThemeContext } from './contexts/theme-provider';
import WelcomeScreens from './screens/Authentication/WelcomeScreens';


export default function App() {
  // const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ThemeProvider>

      <WelcomeScreens />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
      backgroundColor: "white",
      flex: 1,
      // backgroundColor: "#f6f7f9"
  }
})