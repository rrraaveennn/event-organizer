import { StyleSheet, ScrollView, View, Text, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.userSection}>
                <View style={styles.cover}>

                </View>
                <View style={styles.userInfo}>
                    <Pressable onPress={() => {}}>
                        <Image source={require("../assets/user.png")} style={styles.avatar} />
                    </Pressable>
                    <Text style={styles.displayName}>
                        John Ray Ben Dela Rama
                    </Text>
                    <Text style={styles.role}>
                        Event Organizer / Concerts
                    </Text>
                    <View>
                        <Text style={{}}>
                            <MaterialIcons name="star-rate" size={24} color="#ff9030" /> 5.0
                        </Text>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#f6f7f9"
    },
    cover: {

    },
    userSection: {
        height: 300,
        justifyContent: 'flex-end'
    },
    userInfo: {
        backgroundColor: "#f6f7f9",
        borderBottomWidth: 1,
        borderColor: '',
        flex: .5,
        padding: 10,
        gap: 5
    },
    avatar: {
        borderRadius: 100,
        height: 70,
        width: 70,
        borderWidth: 3,
        borderColor: '#443cff'
    },
    displayName: {
        fontSize: 18,
        
    },
    role: {
        fontWeight: '200',
        color: 'gray'
    }
})