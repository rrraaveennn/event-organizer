import { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Pressable, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ChatRoom(props) {
    const [message, setMessage] = useState("");
    const { currentUser } = props.route.params;

    return (
        <View style={styles.container}>
            <View style={styles.conversationContainer}>
                <View style={{
                    paddingRight: 5
                }}>
                    <Image source={require("../../assets/RYBN.jpg")} style={styles.avatar} />
                    <View style={{
                        ...styles.chatBubble,
                        borderTopRightRadius: 2,
                        marginRight: 30
                    }}>
                        <Text style={styles.chatBody}>
                            Hello World
                        </Text>
                        
                    </View>
                    <Text style={{
                        ...styles.chatDate,
                        paddingRight: 30,
                        alignSelf: "flex-end"
                    }}>
                        {(new Date()).toLocaleTimeString()}
                    </Text>
                </View>

                <View style={{
                    paddingLeft: 5,
                    alignSelf: "flex-start" 
                }}>
                    <Image source={{uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{
                        ...styles.avatar,
                        alignSelf: "flex-start",
                    }} />
                    <View style={{
                        ...styles.chatBubble,
                        borderTopLeftRadius: 2,
                        marginLeft: 30
                    }}>
                        <Text style={styles.chatBody}>
                            Hello World
                        </Text>
                        
                    </View>
                    <Text style={{
                        ...styles.chatDate,
                        paddingLeft: 30,
                        alignSelf: "flex-start"
                    }}>
                        {(new Date()).toLocaleTimeString()}
                    </Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.messageInput} placeholder="Enter your message..." placeholderTextColor="gray" />
                <Pressable style={styles.sendButton}>
                <Ionicons name="send" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "white",
        flexGrow: 1,
    },
    conversationContainer: {
        flex: 8,
        gap: 10,
        paddingVertical: 20,
    },
    chatBubbleContainer: {
        
    },
    chatBubble: {
        backgroundColor: "#ff9030",
        padding: 6,
        borderRadius: 10,
        alignSelf: "flex-end",
        maxWidth: "70%",
        
    },
    chatBody: {
        color: "black",
        fontSize: 14
    },
    chatDate: {
        color: "gray",
        fontSize: 12,
        
    },
    avatar: {
        alignSelf: "flex-end",
        height: 30,
        width: 30,
        borderRadius: 100,
    },
    sendButton: {
        borderRadius: 100,
        padding: 5
    },
    messageInput: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "gray",
        flexGrow: 1,
        
    },
    inputContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 50,
        backgroundColor: "white",
        flex: 1,
        gap: 4,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 5,
    }
})