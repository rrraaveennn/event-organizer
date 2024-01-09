import { View, TextInput, StyleSheet } from "react-native";
import { ThemeContext, themes } from "../contexts/theme-provider";
import { useContext } from "react";

export default function SearchInput(props) {
    const { theme } = useContext(ThemeContext);

    return (<View style={{
        ...styles.searchContainer,
        backgroundColor: themes.color
    }}>
        <TextInput
            style={{
                ...styles.searchInput,
                borderColor: "#434d56",
                color: theme.opposite,
            }}
            placeholderTextColor={"#434d56"}
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
    },
    searchInput: {
        borderRadius: 50,
        flex: 1,
        paddingVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
        fontWeight: "600",
        fontSize: 16
    },
})