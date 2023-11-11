import { StyleSheet, View, Text, Pressable } from "react-native";


export default function OrganizerList({children}) {
    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>
                Organizers
            </Text>
            <Pressable>
            <Text style={styles.viewMore}>
                View more
            </Text>
            </Pressable>
        </View>
        <View>
            {children}
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#22222f"
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    viewMoreContainer: {

    },
    viewMore: {
        color: "gray",
    }
})