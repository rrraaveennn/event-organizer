import { useContext } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { ThemeContext } from '../contexts/theme-provider';


export default function Organizer({navigation, email, rating, role, address, image, firstName, lastName, companyName, category}) {
    const { theme } = useContext(ThemeContext);

    return (
        <View>
            <Pressable onPress={() => {
                navigation.navigate("UserServiceProfile", {
                    firstName,
                    image,
                    lastName,
                    companyName,
                    category,
                    role,
                    address,
                    email,
                    rating
                });
            }} style={{
                ...styles.container,
                backgroundColor: theme.color
            }}>
                <View>
                    <Image
                        style={styles.avatar}
                        source={{uri: image}}
                    />
                </View>
                <View style={styles.info}>
                    <View>
                        <Text style={{
                            ...styles.name,
                            color: theme.opposite
                        }}>
                            {firstName} {lastName}
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color:  "#434d56"
                        }}>
                            {companyName}
                        </Text>
                        <Text style={{
                            ...styles.category,
                            color: "gray"
                        }}>
                            {category}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 16,
        paddingVertical: 15,
        paddingHorizontal: 14,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    info: {
        flex: 1,
        justifyContent: "center"
    },
    name: {
        fontSize: 15,
        fontWeight: "700"
    },
    category: {
        fontWeight: "bold"
    }
})