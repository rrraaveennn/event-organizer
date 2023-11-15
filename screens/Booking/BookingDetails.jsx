import { Text, View, StyleSheet } from "react-native";

export default function BookingDetails(props) {
    return (<View style={styles.container}>
        <Text style={styles.text}>
            Booking Details
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    text: {
        color: "black"
    }
})