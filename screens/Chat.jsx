import { ScrollView, View, StyleSheet, Text } from "react-native";

export default function Chat() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>
                    Chat Screen
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