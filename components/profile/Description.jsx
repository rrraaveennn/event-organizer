import { View, Text, StyleSheet } from 'react-native';

export default function Description({children, companyName}) {
    return (
        <View style={styles.description}>
            <Text style={{
                fontSize: 16,
                letterSpacing: 1,
                color: 'black',
                textAlign: 'center',
                paddingVertical: 5
            }} >
                {companyName}
            </Text>
            <Text style={styles.descriptionContent}>
                {children}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    descriptionContent: {
        color: 'black'
    },
    description: {
        textAlign: 'center',
        padding: 10
    }
})