import { View, StyleSheet, Text, Image, Pressable } from 'react-native';


export default function Post(props) {
    return (
        <View>
            <Pressable onPress={() => { }} style={styles.container}>
                <View>
                    <Image source={require('../assets/RYBN.jpg')} style={styles.avatar} />
                </View>
                <View>
                    <View>
                        <Text>
                            {props.firstName} {props.lastName}
                        </Text>
                        <Text>
                            {props.date}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {props.caption}
                        </Text>
                        
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})