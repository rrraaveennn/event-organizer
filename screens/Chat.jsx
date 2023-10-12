import { ScrollView, View, StyleSheet, Text, FlatList, Image, TextInput, Pressable } from "react-native";

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

export default function Chat() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                />
            </View>
            <FlatList
                data={DATA}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => { }} style={styles.chatContainer}>
                            <Image source={require('../assets/wallpaper.jpg')} style={styles.image} />
                            <View>
                                <Text style={styles.title}>
                                    {item.name}
                                </Text>
                                <Text style={{
                                    color: 'grey'
                                }}>
                                    {item.company}
                                </Text>
                            </View>
                        </Pressable>
                    )
                }}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33333f"
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#22222f'
    },
    chatContainer: {
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#22222f'
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
        color: '#f6f7f9'
    },
    searchInput: {
        borderRadius: 20,
        backgroundColor: 'gray',
        color: '#f6f7f9',
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
})