import { Text, View, StyleSheet } from "react-native";

export default function BookingDetails(props) {
    return (<View style={styles.container}>
        <Text>
            Booking Details
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#22222f",
        flex: 1
    }
})