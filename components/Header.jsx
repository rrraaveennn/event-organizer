import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header(props) {
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor={'#22222f'} barStyle={'light-content'} />
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        backgroundColor: '#22222f',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerTitle: {
        position: "relative",
        top: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f6f7f9'
    }
})