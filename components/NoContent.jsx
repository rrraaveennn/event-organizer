import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NoContent(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="cup-outline" size={80} color="#22222f" />
            <Text style={styles.headline}>
                {props.headline}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    },
    headline: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#22222f'
    }
})