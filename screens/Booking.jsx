import { StyleSheet, Text, View } from "react-native";

export default function Booking() {
    return (
        <View style={styles.container}>
            <Text>
                Booking Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f7f9"
    }
})