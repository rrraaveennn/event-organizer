import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function Notification() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>
                    Notification Screen
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#f6f7f9"
    },
})