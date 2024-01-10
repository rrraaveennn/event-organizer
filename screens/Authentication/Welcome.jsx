import { useContext } from "react";
import { Pressable, SafeAreaView, View, StyleSheet, Text, ImageBackground } from "react-native";
import { ThemeContext } from "../../contexts/theme-provider";
import DarkMode from "../../components/DarkMode";
import Backgrounds from "../../components/Backgrounds";

function Welcome({navigation}) {

    const { theme } = useContext(ThemeContext);

    return <SafeAreaView style={{
        ...styles.container,
        backgroundColor: theme.color
    }}>
        
        <Backgrounds no={1}>
            <View style={styles.wrapper}>

                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    paddingVertical: 10,
                    paddingTop: 30
                }}>
                    <DarkMode />
                </View>
                <View style={{
                    paddingTop: 150,
                    paddingBottom: 50,
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "700",
                        textAlign: "center",
                        color: theme.type == "light" ? "#434b56": theme.opposite
                    }}>
                        Event Organizer
                    </Text>
                    <Text style={{
                        textAlign: "center",
                        color: theme.type == "light" ? "#434b56": theme.opposite
                    
                    }}>
                        Your best event companion
                    </Text>
                </View>
                <View style={{
                    flex: 1
                }}>
                <Pressable style={{
                    ...styles.startButton,
                    backgroundColor: "#3c85f3"
                }}
                        onPress={() => {
                    navigation.navigate("Login")
                }}
                >
                <Text style={{
                    color: "#dde5eb",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center"
                            }}>
                            Get started
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Backgrounds>
        
    </SafeAreaView>;
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },  
    startButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        width: "80%"
    },
    
    wrapper: {
        flex: 1,
        padding: 5,
        justifyContent: "space-between",
        alignItems: "center"
    }
})