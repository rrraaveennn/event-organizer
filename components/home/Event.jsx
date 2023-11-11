import { Pressable, Image, View, Text, StyleSheet } from 'react-native'


export default function Event(props) {
    return (
        <Pressable onPress={() => { }} style={styles.container}>
            <Image source={{uri: props.image}} style={styles.coverImage} />
            <View style={styles.infoSection}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.date}>
                    {props.date}
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
        width: 340,
        resizeMode: 'cover',
        borderRadius: 20,
        backgroundColor: 'black'
    },
    infoSection: {
        position: 'absolute',
        left: 20,
        top: 100,
        width: '100%',
        paddingHorizontal: 5
    },

    title: {
        color: '#f6f7f9',
        // textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    date: {
        color: "white"
    }
})