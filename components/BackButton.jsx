import { Pressable } from "react-native";

function BackButton() {
    return (<Pressable style={styles.button}>
        <Text>Back</Text>
    </Pressable> );
}

const styles = StyleSheet.create({
    button: {
        
    }
})

export default BackButton;