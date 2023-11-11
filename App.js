import BottomTabs from './components/BottomTabs';
import { StyleSheet } from 'react-native';
export default function App() {
  return (
    <BottomTabs safeContainer={styles.safeContainer} />

  );
}

const styles = StyleSheet.create({
  safeContainer: {
      paddingTop: 0,
      flex: 1,
      // backgroundColor: "#f6f7f9"
  }
})