import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import Category from '../components/home/category';

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={{
                flex: 1
            }}>
                <ScrollView horizontal={true} style={styles.categoryContainer}>
                    <Category title='Lolapalooza' />
                    <Category title='RYBN' />
                    <Category title='Lolapalooza' />
                    <Category title='RYBN' />
                    <Category title='Lolapalooza' />
                    <Category title='RYBN' />
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#33333f",
    },
    categoryContainer: {
        // padding: 20
        padding: 20,
        height: 200,
    },

})