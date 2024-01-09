import { useContext } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { ThemeContext } from '../contexts/theme-provider';


export default function Organizer(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <View>
            <Pressable onPress={() => { }} style={{
                ...styles.container,
                backgroundColor: theme.color
            }}>
                <View>
                    <Image
                        style={styles.avatar}
                        source={{uri: props.image}}
                    />
                </View>
                <View style={styles.info}>
                    <View>
                        <Text style={{
                            ...styles.name,
                            color: theme.opposite
                        }}>
                            {props.firstName} {props.lastName}
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color:  "#434d56"
                        }}>
                            {props.companyName}
                        </Text>
                        <Text style={{
                            ...styles.category,
                            color: "gray"
                        }}>
                            {props.category}
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