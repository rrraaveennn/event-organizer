import { Children } from "react"
import { View, Image, StyleSheet, ImageBackground } from "react-native"

export default function ProfileCover({children}) {
    return (
            <ImageBackground
                source={{ uri: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                
                styles={styles.cover} >
            <View style={styles.coverContainer}>
                
                </View>
                </ImageBackground>
    ) 
}

const styles = StyleSheet.create({
    coverContainer: {
        height: 180,
    },
    cover: {
        height: "100%",
        width: "100%"
        // resizeMode: 'repeat',
    },
})