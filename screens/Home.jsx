import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import CategoryList from '../components/home/CategoryList';
import Organizer from '../components/Organizer';
import OrganizerList from '../components/home/OrganizersList';
import EventList from '../components/home/EventList';
import SearchInput from '../components/SearchInput';

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.categoryContainer}>
                <SearchInput />
                <EventList />
                <CategoryList
                />
                <OrganizerList>
                    <Organizer
                    firstName="Jireh"
                    lastName="Belen"
                    category="Pogi"
                        companyName="X"
                        image="https://tse1.mm.bing.net/th?id=OIP.GFqypNMDpVsI1s7XGQJqvAHaHb&pid=Api&P=0&h=220"
                    />
                        
                    <Organizer
                        firstName="Mary"
                        lastName="Yana"
                        category="Charity"
                        companyName="Children Inc."
                        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Organizer
                        firstName="John"
                        lastName="Doe"
                        category="Conference"
                        companyName="Vercel"
                        image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Organizer
                        firstName="Anne"
                        lastName="McDermott"
                        category="Wedding"
                        companyName="Sample"
                        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </OrganizerList>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    categoryContainer: {
        flex: 1
    },
    
})