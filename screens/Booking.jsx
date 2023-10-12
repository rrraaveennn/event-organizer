import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const DATA = [
    {
        company: 'Lolapalooza',
        accepted: true,
        organizer: 'RYBN',
        duration: ['10/30/2023', '10/31/2023']
    },
    {
        company: 'Coachella',
        accepted: false,
        organizer: 'RYBN',
        duration: ['10/30/2023', '10/31/2023']
    },
    {
        company: 'Superpop 2023',
        accepted: true,
        organizer: 'RYBN',
        duration: ['10/30/2023', '10/31/2023']
    },
    {
        company: 'Asia Artist Award',
        accepted: false,
        organizer: 'RYBN',
        duration: ['10/30/2023', '10/31/2023']
    },
    {
        company: 'TMA',
        accepted: true,
        organizer: 'RYBN',
        duration: ['10/30/2023', '10/31/2023']
    }
]

export default function Booking() {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.bookingContainer}>
                            <Image source={require('../assets/RYBN.jpg')} style={styles.image} />
                            <View style={styles.infoSection}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: 'normal',
                                    color: '#f6f7f9'
                                }}>
                                    {item.company}
                                </Text>
                                <Text style={{
                                    color: 'grey'
                                }}>
                                    {item.duration[0]} - {item.duration[1]}
                                </Text>
                                <Text style={styles.accepted}>
                                    {item.accepted ? 'Accepted': 'Not Accepted'}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33333f"
    },
    bookingContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 10,
        paddingVertical: 20,
        backgroundColor: '#22222f'
    },
    image: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        borderRadius: 15
    },
    infoSection: {
        justifyContent: 'flex-start',
        height: 60,
        gap: 2
    },
    accepted: {
        color: '#f6f7f9',
        backgroundColor: '#ff9030',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 20,
        fontWeight: '800',
        textAlign: 'center'
    }
})