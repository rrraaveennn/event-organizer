import { View, Image, StyleSheet } from "react-native"

export default function ProfileCover(props) {
    return (
        <View style={styles.coverContainer}>
            <Image source={{uri: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} styles={styles.cover} />
        </View>
    ) 
}

const styles = StyleSheet.create({
    coverContainer: {
        height: 200
    },
    cover: {
        height: 200
        // resizeMode: 'repeat',
    },
})