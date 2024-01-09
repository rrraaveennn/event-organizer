import { useContext, useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Pressable, Image, KeyboardAvoidingView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from "../../contexts/theme-provider";
import moment from "moment";

export default function ChatRoom(props) {
    const [message, setMessage] = useState("");
    const { currentUser } = props.route.params;
    const { theme } = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView style={{
            ...styles.container,
            backgroundColor: theme.color
        }}>
            <View style={styles.conversationContainer}>
                <View style={{
                    paddingRight: 5
                }}>
                    <Image
                        source={require("../../assets/RYBN.jpg")}
                        style={styles.avatar}
                    />
                    <View style={{
                        ...styles.chatBubble,
                        borderTopRightRadius: 2,
                        marginRight: 30,
                        alignSelf: "flex-end"
                    }}>
                        <Text style={{
                            ...styles.chatBody,
                            color: theme.opposite,
                            
                        }}>
                           Hello
                        </Text>
                        
                    </View>
                    <Text style={{
                        ...styles.chatDate,
                        paddingRight: 30,
                        alignSelf: "flex-end"
                    }}>
                        {moment().subtract(1, "days").subtract(23, "minutes").calendar()}
                    </Text>
                </View>

                <View style={{
                    paddingLeft: 5,
                    alignSelf: "flex-start" 
                }}>
                    <Image
                        source={{
                            uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }}
                        style={{
                        ...styles.avatar,
                        alignSelf: "flex-start",
                        }}
                    />
                    <View style={{
                        ...styles.chatBubble,
                        borderTopLeftRadius: 2,
                        marginLeft: 30,
                        alignSelf: "flex-start"
                    }}>
                        <Text style={{
                            ...styles.chatBody,
                            color: theme.opposite,
                            
                        }}>
                            Hello 
                        </Text>
                        
                    </View>
                    <Text style={{
                        ...styles.chatDate,
                        paddingLeft: 30,
                        alignSelf: "flex-start"
                    }}>
                        {moment().subtract(1, "days").calendar()}
                    </Text>
                </View>
            </View>
            <View style={{
                ...styles.inputContainer,
                backgroundColor: theme.color
            }}>
                <TextInput style={{
                    ...styles.messageInput,
                    color: theme.opposite
                }} placeholder="Enter your message..." placeholderTextColor="gray" />
                <Pressable style={styles.sendButton}>
                <Ionicons name="send" size={24} color={theme.opposite} />
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
    },
    conversationContainer: {
        flex: 8,
        gap: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    chatBubbleContainer: {
        
    },
    chatBubble: {
        backgroundColor: "#ff9030",
        padding: 10,
        borderRadius: 5,
        maxWidth: "70%",
    },
    chatBody: {
        fontSize: 14,
        fontWeight: "700",
        textAlign: "left"
    },
    chatDate: {
        color: "#434d56",
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
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100,
        borderWidth: 1,
        fontSize: 18,
        borderColor: "gray",
        height: 50,
        flexGrow: 1,
    },
    inputContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 80,
        flex: 1,
        gap: 4,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderTopWidth: 1,
    }
})