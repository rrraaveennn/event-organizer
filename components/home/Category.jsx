import { View, Text, Image, StyleSheet } from 'react-native';

export default function Category(props) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/RYBN.jpg')} style={styles.coverImage} />
            <View style={styles.infoSection}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20
    },
    coverImage: {

    },
    infoSection: {
        
    },
    title: {

    }
})