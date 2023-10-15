import { StyleSheet, ScrollView, View, FlatList } from "react-native";
import Category from './Category';

const DATA = [
    'Wedding',
    'Birthday',
    'Conference',
    'Festivals',
    'Concerts'
]

export default function CategoryList() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.categoryList}>
                {
                    DATA.map((item, index) => {
                        return <Category key={index} title={item} />
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: '#22222f'
    },
    categoryList: {
        gap: 50
    }
})