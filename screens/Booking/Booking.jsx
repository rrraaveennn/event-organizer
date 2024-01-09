import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View, useColorScheme } from "react-native";
import Header from "../../components/Header";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-provider";
import moment from "moment";

const DATA = [
    {
        company: 'Lolapalooza',
        accepted: true,
        organizer: 'RYBN',
        duration: moment().add(7, "days").calendar()
    },
    {
        company: 'Coachella',
        accepted: false,
        organizer: 'RYBN',
        duration: moment().add(7, "days").fromNow()
    },
    {
        company: 'Superpop 2023',
        accepted: true,
        organizer: 'RYBN',
        duration: moment().add(7, "days").fromNow()
    },
    {
        company: 'Asia Artist Award',
        accepted: false,
        organizer: 'RYBN',
        duration: moment().add(7, "days").fromNow()
    },
    {
        company: 'TMA',
        accepted: true,
        organizer: 'RYBN',
        duration: moment().add(7, "days").fromNow()
    }
]

export default function Booking({ navigation }) {
    const { theme } = useContext(ThemeContext);

    return (
        <SafeAreaView style={{
            ...styles.container,
            backgroundColor: theme.color
        }}>
            {/* <Header title="Booking" /> */}
            <View style={styles.BookingContainer}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => {
                            navigation.navigate("Details")
                        }} style={styles.bookingContainer}>
                            <Image source={require('../../assets/RYBN.jpg')} style={styles.image} />
                            <View style={styles.infoSection}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: '700',
                                    color: theme.opposite
                                }}>
                                    {item.company}
                                </Text>
                                <Text style={{
                                    color: 'grey'
                                }}>
                                    {item.duration}
                                </Text>
                                <Text style={{
                                    ...styles.accepted,
                                    color: "#dde5eb"
                                }}>
                                    {item.accepted ? 'Accepted': 'Rejected'}
                                </Text>
                            </View>
                        </Pressable>
                    )
                }}
            />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bookingContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#434d56",
        padding: 10,
        paddingVertical: 20,
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
        backgroundColor: '#ff9030',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 20,
        fontWeight: '800',
        textAlign: 'center'
    }
})