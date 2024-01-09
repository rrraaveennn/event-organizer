import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useContext } from "react";
import { ThemeContext, themes } from "../contexts/theme-provider";

function DarkMode() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (<Pressable style={styles.button} onPress={() => {
        setTheme(theme.type == themes[0].type ? themes[1] : themes[0]);
    }}>
        <Ionicons name="moon" size={24} color={theme.opposite} />
    </Pressable> );
}

const styles = StyleSheet.create({
    button: {
        padding: 10
    }
});

export default DarkMode;