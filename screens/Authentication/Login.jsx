import { useContext, useState } from "react";
import {
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    Keyboard,
    Pressable
} from "react-native";
import { ThemeContext } from "../../contexts/theme-provider";
import DarkMode from "../../components/DarkMode";
import Backgrounds from "../../components/Backgrounds"
import { AntDesign } from '@expo/vector-icons';

function Login({ navigation }) {
    const { theme } = useContext(ThemeContext);

    const [showPass, setShowPass] = useState(true);


    return (<KeyboardAvoidingView style={{
        ...styles.container,
        backgroundColor: theme.color
    }}>
        <Backgrounds no={1}>
            <Pressable onPress={Keyboard.dismiss} style={{
                flex: 1,
                justifyContent: "center",
            }}>
                <View style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                }}>
                <DarkMode />
                </View>
                <View style={styles.form}>
                    <Text style={{
                        ...styles.header,
                        color: theme.type == "light" ? "#434d56": theme.opposite
                    }}>
                        Sign in
                    </Text>
                    <TextInput
                        placeholder="username"
                        placeholderTextColor={"gray"}
                        style={{
                            ...styles.input,
                            color: theme.opposite,
                            fontSize: 16
                        }}
                    />
                    <View style={{
                        ...styles.input,
                        position: "relative"
                    }}>
                        <TextInput
                            placeholder="password"
                            placeholderTextColor={"gray"}
                            secureTextEntry={showPass}
                            style={{
                                color: theme.opposite,
                                fontSize: 16
                            }}
                        />
                        <Pressable
                            onPress={() => {
                                setShowPass(showPass ? false: true)
                            }}
                            style={{
                                position: "absolute",
                                right: 10,

                            }}
                        >
                            {
                                showPass ?
                            <AntDesign name="eye" size={24} color={theme.opposite} />
                            :
                            <AntDesign name="eyeo" size={24} color={theme.opposite} />
                            }
                        </Pressable>
                        
                    </View>
                    <Pressable
                            onPress={() => {
                                navigation.navigate("Main Menu");
                            }}
                            style={styles.signInButton}
                        >
                            <Text style={{
                                color: "#dde5eb",
                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>
                                Sign in
                            </Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style={{
                            ...styles.switchForm,
                            color: theme.type == "dark" ? theme.opposite: "#434d56"
                        }}>
                            Don't have an account? Register here!
                        </Text>
                    </Pressable>
                </View>
        </Pressable>
        
            
       </Backgrounds>
    </KeyboardAvoidingView> );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        gap: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    input: {
        height: 40,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    header: {
        fontSize: 30,
        fontWeight: "700",
        
    },
    signInButton: {
        backgroundColor: "#3c85f3",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    switchForm: {
        fontWeight: "800",
        fontSize: 14,
        textAlign: "center"
    }
})

export default Login;