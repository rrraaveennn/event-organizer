import { StyleSheet, ScrollView, View, FlatList, Text, Pressable } from "react-native";
import Category from './Category';

const DATA = [
    {
        title: "Wedding",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Birthday",
        image: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Conference",
        image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Festivals",
        image: "https://plus.unsplash.com/premium_photo-1664304095595-e428558e8161?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Concerts",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D"
    },
]

export default function CategoryList() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>
                Categories
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
                        return <Category key={index} title={item.title} image={item.image} />
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: 'white'
    },
    categoryList: {
        gap: 50
    },
    title: {
        color: "black",
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