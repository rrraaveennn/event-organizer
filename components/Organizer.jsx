import { View, StyleSheet, Text, Image, Pressable } from 'react-native';


export default function Organizer(props) {
    return (
        <View>
            <Pressable onPress={() => { }} style={styles.container}>
                <View>
                    <Image
                        style={styles.avatar}
                        source={{uri: props.image}}
                    />
                </View>
                <View style={styles.info}>
                    <View>
                        <Text style={styles.name}>
                            {props.firstName} {props.lastName}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.companyName}>
                            {props.companyName}
                        </Text>
                        <Text style={styles.category}>
                            {props.category}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 16,
        paddingVertical: 15,
        paddingHorizontal: 14,
        
        backgroundColor: '#22222f'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    info: {
        flex: 1,
        justifyContent: "center"
    },
    name: {
        color: "white",
        fontSize: 15,
        fontWeight: "700"
    },
    companyName: {
        color: "white",
    },
    category: {
        color: "white",
        fontWeight: "bold"
    }
})