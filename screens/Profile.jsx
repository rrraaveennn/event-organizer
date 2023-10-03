import { StyleSheet, ScrollView, View, Text, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.userSection}>
                <View style={styles.cover}>
                    <Image source={require('../assets/RYBN.jpg')}/>
                </View>
                <View style={styles.userInfo}>
                    <Pressable onPress={() => {}}>
                        <Image source={require("../assets/user.png")} style={styles.avatar} />
                    </Pressable>
                    <Ionicons name="settings-sharp" size={30} color="black" style={styles.settings} />
                    <Text style={styles.displayName}>
                        John Doe
                    </Text>
                    <Text style={{...styles.role, fontWeight: 'bold'}}>
                        johndoe@gmail.com
                    </Text>
                    <Text style={styles.role}>
                        Event Organizer / Concerts
                    </Text>
                    <View>
                        <Text>
                            Lorem ipsum dolor sit amet
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5  }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="star-rate" size={24} color="#ff9030"/>
                            <Text style={{ paddingTop: 5 }}>
                                5.0
                        </Text>
                        </View>

                        {/* <Pressable style={styles.messageButton}>
                            <Text style={{color: 'white'}}>Message</Text>
                        </Pressable> */}
                    </View>
                </View>
                
            </View>
            
            {/* <View style={styles.topTab}>
                <Pressable style={styles.topTabButton }>
                    <Text style={{textAlign: 'center'}}>
                        Feeds
                    </Text>
                </Pressable>
                <Pressable style={styles.topTabButton}>
                    <Text style={{textAlign: 'center'}}>
                        Reviews
                    </Text>
                </Pressable>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#f6f7f9", 
    },
    cover: {
        backgroundColor: "gray",
        flex: .4
    },
    userSection: {
        height: 400,
        justifyContent: 'flex-end'
    },
    userInfo: {
        backgroundColor: "#f6f7f9",
        borderBottomWidth: 1,
        
        flex: .6,
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
    },
    messageButton: {
        backgroundColor: '#22222f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 50
    },
    topTab: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    topTabButton: {
        flex: .5,
        backgroundColor: '#f6f7f9',
        height: '100%',
        justifyContent: 'center'
    },
    settings: {
        position: 'absolute',
        right: 10,
        top: 25
    }
});