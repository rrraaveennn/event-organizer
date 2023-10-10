import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NoContent(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="cup-outline" size={80} color="#f6f7f9" />
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
        color: '#f6f7f9'
    }
})