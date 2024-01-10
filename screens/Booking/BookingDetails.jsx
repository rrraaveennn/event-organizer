import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ThemeContext } from "../../contexts/theme-provider";

export default function BookingDetails(props) {
    const { theme } = useContext(ThemeContext);

    return (<View style={{
        ...styles.container,
        backgroundColor: theme.color
    }}>
        <View>
            <Text style={{
                fontSize: 18,
                fontWeight: "700",
                color: theme.type === "light" ? "#434d56": theme.opposite
            }}>
                Event Title
            </Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: "black"
    }
})