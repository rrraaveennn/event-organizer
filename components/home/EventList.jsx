import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native"
import Event from "./Event"

const DATA = [
    {
        title: 'Coachela',
        image: 'https://livewallpaperhd.com/wp-content/uploads/2019/04/Wallpaper-HD-Coachella-2019.jpg'
    },
    {
        title: 'Grent Perez Music Show',
        image: 'https://nylonmanila.com/wp-content/uploads/2021/12/grent-perez.jpg'
    },
    {
        title: 'Vercel Conference',
        image: 'https://pbs.twimg.com/media/Ff7tLSzVIAIJaev?format=jpg&name=large'
    },
    {
        title: 'Lolapalooza',
        image: 'https://specials-images.forbesimg.com/imageserve/5d3dae2e95e0230008f6c30d/960x0.jpg?fit=scale'
    },
    {
        title: 'MAMA 2023',
        image: 'https://tse2.mm.bing.net/th?id=OIP.VAkPVKW7rK6IGER_lozWPwHaDy&pid=Api&P=0&h=220'
    }
]

export default function EventList(props) {
    return (<View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>
            Upcoming Events
            </Text>
            <Pressable>
                <Text style={styles.viewMore}>
                    View more
                </Text>
            </Pressable>
        </View>
        <ScrollView horizontal={true} style={styles.categoryList}>
            {
                DATA.map((item, index) => {
                    return <Event key={index} title={item.title} image={item.image} date={"11/11/2023"} />
                })
            }
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: '#22222f'
    },
    categoryList: {
        gap: 50
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    viewMore: {
        color: "gray"
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 20
    }
})