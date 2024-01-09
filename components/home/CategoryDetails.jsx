import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function Category({image, title, navigation}) {
    return (
        <Pressable onPress={() => {
        }} style={styles.container}>
            <Image source={{uri: image}} style={styles.coverImage} />
            <View style={styles.infoSection}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        padding: 10,
        position: 'relative'
    },
    coverImage: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        borderRadius: 20,
        backgroundColor: 'black'
    },
    infoSection: {
        position: 'absolute',
        left: 20,
        top: 110,
        width: '100%',
        paddingHorizontal: 5
    },

    title: {
        color: '#f6f7f9',
        // textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})