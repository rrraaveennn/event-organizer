import { View, Text, StyleSheet } from 'react-native';

export default function Description({children}) {
    return (
        <View style={styles.description}>
            <Text style={{
                fontSize: 16,
                letterSpacing: 1,
                color: '#f6f7f9',
                textAlign: 'center',
                paddingVertical: 5
            }} >
                Description
            </Text>
            <Text style={styles.descriptionContent}>
                {children}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    descriptionContent: {
        color: '#f6f7f9'
    },
    description: {
        textAlign: 'center',
        padding: 10
    }
})