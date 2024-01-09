import { ScrollView, View, StyleSheet, Text, FlatList, Image, TextInput, Pressable } from "react-native";
import SearchInput from "../../components/SearchInput";
import Header from "../../components/Header";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-provider";

const DATA = [
    {
        name: 'Kim Minji',
        company: 'Ador'
    },
    {
        name: 'Pham Hanni',
        company: 'Gucci'
    },
    {
        name: 'Mo Jihye',
        company: 'Disney'
    },
    {
        name: 'Kang Haerin',
        company: 'Dior'
    },
    {
        name: 'Lee Hyein',
    },
    {
        name: 'Min Heejin',
    },
    {
        name: 'Lee Mujin'
    },
    {
        name: 'Raven Dela Rama',
    }
]

export default function Chat({ navigation }) {
    const { theme } = useContext(ThemeContext);

    return (
        <ScrollView style={{
            ...styles.container,
            backgroundColor: theme.color
        }}>
            {/* <Header title="Chat" /> */}
            <SearchInput/>
            {
                DATA.map((item) => {
                    return (
                        <Pressable key={item.name} onPress={() => {
                            navigation.navigate('Room', {
                                currentUser: 'John Doe'
                            });
                        }} style={styles.chatContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.image} />
                            <View>
                                <Text style={{
                                    ...styles.title,
                                    color: theme.type == "light" ? "#434d56": theme.opposite
                                }}>
                                    {"John Doe"}
                                </Text>
                                <Text style={{
                                    color: "#434d56"
                                }}>
                                    {"Meta"}
                                </Text>
                            </View>
                        </Pressable>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContainer: {
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'cover',
        borderRadius: 50
    },
    title: {
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: "700",
        letterSpacing: 1.4
    },
    
})