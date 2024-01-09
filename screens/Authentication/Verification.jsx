import {  View, Text, TextInput, Pressable, KeyboardAvoidingView, Keyboard, StyleSheet } from "react-native";
import Backgrounds from "../../components/Backgrounds";
import DarkMode from "../../components/DarkMode";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-provider";

function Verification({ navigation }) {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            ...styles.container,
            backgroundColor: theme.color
        }}>

        <Backgrounds no={2}>
            <Pressable onPress={Keyboard.dismiss} style={{
                flex: 1,
                justifyContent: "flex-start",
                paddingTop: 40
            }}>
                <View style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                }}>
                <DarkMode />
                </View>
                    <View style={{
                        paddingLeft: 20,
                        paddingTop: 30
                }}>
                        <Text
                            style={{
                                color: theme.type == "light" ? "#434d56" : theme.opposite,
                                fontSize: 30,
                                fontWeight: "700"
                            }}
                        >
                            Email Verification
                        </Text>
                        <Text style={{
                            color: "#434d56"
                        }}>
                            We have sent a verification code to your email.
                        </Text>
                    </View>
                    <View style={{
                        height: 150,
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        paddingHorizontal: 40,
                    }}>
                        <TextInput
                            style={{
                                borderBottomWidth: 1,
                                borderColor: "gray",
                                width: "100%",
                                paddingVertical: 10,
                                fontSize: 20,
                                letterSpacing: 30,
                                color: theme.opposite
                            }}
                            keyboardType="number-pad"
                            textAlign="center"
                        />
                        

                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: "center"
                    }}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Main Menu")
                        }}

                        style={{
                            backgroundColor: "#3c85f3",
                            paddingVertical: 10,
                            width: "80%",
                            borderRadius: 5
                        }}
                    >
                        <Text style={{
                            color: "#dde5eb",
                            fontWeight: "700",
                            fontSize: 18,
                            textAlign: "center"
                        }}>
                            Confirm
                        </Text>

                    </Pressable>
                    </View>
        </Pressable>
        
            
       </Backgrounds>
        
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default Verification;