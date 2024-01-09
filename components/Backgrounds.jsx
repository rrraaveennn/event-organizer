import { ImageBackground, StyleSheet } from "react-native";

function Backgrounds({children, no }) {
    if (no == 1) {
        return (
            <ImageBackground
                style={styles.ImageBackground}
                source={ require("../assets/image-backgrounds/layered-waves-haikei.png")} >
                {/* <ImageBackground
                style={styles.ImageBackground}
                source={require("../assets/image-backgrounds/circle-scatter-haikei.png")} > */}
            
                {children}
                {/* </ImageBackground> */}
            </ImageBackground>);
    }

    if (no == 2) {
        return (
            <ImageBackground
                style={styles.ImageBackground}
                source={require("../assets/image-backgrounds/layered-waves-haikei-2.png")} >
                {/* <ImageBackground
                style={styles.ImageBackground}
                source={require("../assets/image-backgrounds/circle-scatter-haikei.png")} > */}
            
                {children}
                {/* </ImageBackground> */}
            </ImageBackground>);
    }
}

const styles = StyleSheet.create({
    ImageBackground: {
        width: "100%",
        height: "100%"
    },
})

export default Backgrounds;