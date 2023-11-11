import { View, TextInput, StyleSheet } from "react-native";

export default function SearchInput(props) {
    return (<View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            placeholder="Search"
        />
    </View>)
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#22222f'
    },
    searchInput: {
        borderRadius: 20,
        backgroundColor: 'gray',
        color: '#f6f7f9',
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
})