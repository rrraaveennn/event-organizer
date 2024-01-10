import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image, FlatList } from 'react-native';
import CategoryList from '../../components/home/CategoryList';
import Organizer from '../../components/Organizer';
import OrganizerList from '../../components/home/OrganizersList';
import EventList from '../../components/home/EventList';
import SearchInput from '../../components/SearchInput';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-provider';


const DATA = [
    {
        firstName:"Jireh",
                        lastName:"Belen",
                        email:"jirehbelen@student.laverdad.edu.ph",
                        category: "Pogi",
                        role:"Organizer",
                        address: "Paranaque, Philippines",
                        companyName: "X",
                        image: "https://tse1.mm.bing.net/th?id=OIP.GFqypNMDpVsI1s7XGQJqvAHaHb&pid=Api&P=0&h=220",
                        rating: "5.0"
    },
    {
        firstName:"Mary",
                        lastName:"Yana",
                        role:"Organizer",
                        email:"maryyana@gmail.com",
                        address: "Paranaque, Philippines",
                        category: "Charity",
                        companyName: "Children Inc.",
                        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        rating: "4.4",
    },
    {
                        firstName:"John",
                        lastName:"Doe",
                        role:"Organizer",
                        address: "Paranaque, Philippines",
                        email:"johndoe@vercel.app",
                        category: "Conference",
                        companyName: "Vercel",
                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        rating: "4.0"
    },
    {
        firstName:"Anne",
                        lastName:"McDermott",
                        category: "Wedding",
                        role:"Organizer",
                        email:"annemcdermott@gmail.com",
                        address: "Paranaque, Philippines",
                        companyName: "Sample",
                        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        rating: "4.8",
    }
]

export default function Home({navigation}) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <View style={{
            ...styles.container,
            backgroundColor: theme.color
        }}>
            <ScrollView style={styles.categoryContainer}>
                <SearchInput />
                <EventList />
                <CategoryList
                    navigation={navigation}
                />
                <OrganizerList
                    navigation={navigation}
                >
                    
                        {DATA.map(({
                            firstName,
                            lastName,
                            email,
                            role,
                            image,
                            address,
                            rating,
                            companyName,
                            category
                        }, idx) => (
                            <Organizer
                                key={idx}
                                navigation={navigation}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                category={category}
                                role={role}
                                address={address}
                                companyName={companyName}
                                image={image}
                                rating={rating}
                            />))
                            }

                </OrganizerList>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryContainer: {
        flex: 1
    },
    
})