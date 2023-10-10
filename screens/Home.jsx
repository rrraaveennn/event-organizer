import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Home Screen
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f7f9"
    },
    text: {
        fontSize: 400
    }
})