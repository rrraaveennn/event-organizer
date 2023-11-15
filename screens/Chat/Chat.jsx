import { ScrollView, View, StyleSheet, Text, FlatList, Image, TextInput, Pressable } from "react-native";
import SearchInput from "../../components/SearchInput";
import Header from "../../components/Header";

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

export default function Chat({navigation}) {
    return (
        <ScrollView style={styles.container}>
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
                                <Text style={styles.title}>
                                    {"John Doe"}
                                </Text>
                                <Text style={{
                                    color: 'grey'
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
        backgroundColor: "white",
    },
    chatContainer: {
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: 'white'
        // borderBottomWidth: 1,
        // borderBottomColor: '#22222f'
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
        color: 'black'
    },
    
})