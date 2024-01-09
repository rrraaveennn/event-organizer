import { useContext } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { ThemeContext } from "../../contexts/theme-provider";


export default function OrganizerList({ children, navigation }) {
    const { theme } = useContext(ThemeContext);

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{
                ...styles.title,
                color: theme.opposite
            }}>
                Organizers
            </Text>
            <Pressable>
                <Text style={styles.viewMore} onPress={() => {
                    navigation.navigate("Organizers");
            }}>
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
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    viewMoreContainer: {

    },
    viewMore: {
        color: "gray",
    }
})