import BottomTabs from './components/BottomTabs';
import { SafeAreaView, StyleSheet } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <BottomTabs safeContainer={styles.safeContainer} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    paddingTop: 28,
      backgroundColor: "white",
      flex: 1,
      // backgroundColor: "#f6f7f9"
  }
})