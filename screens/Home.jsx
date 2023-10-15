import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import CategoryList from '../components/home/CategoryList';
import Post from '../components/Review';

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.categoryContainer}>
                <CategoryList

                />
                <View>
                {
                    
                    <Post
                        name='John Ray Ben Dela Rama'
                        body=''
                        rating='4.5'
                        attachments={'../assets/RYBN.jpg'}
                        date='10/10/2023'
                    />
                }
                </View>
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
        flex: 1
    }
})