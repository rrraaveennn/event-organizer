import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../contexts/theme-provider';

export default function Description({ children, companyName }) {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.description}>
            <Text style={{
                fontSize: 16,
                letterSpacing: 1,
                color: "#434d56",
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
        color: "#434d56",
    },
    description: {
        textAlign: 'center',
        padding: 10
    }
})