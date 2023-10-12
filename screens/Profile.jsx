import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Pressable,
    FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import RatingStatus from '../components/profile/ratingStatus';
import NoContent from '../components/NoContent';
import { FontAwesome5 } from '@expo/vector-icons';
import Service from '../components/Service';

const USER = {
    name: 'RYBN',
    email: 'rrraaveennn@gmail.com',
    role: 'Organizer',
    service: 'Concerts',
    address: 'Manila, Philippines',
    rating: '3.5'
}

const DATA = [
    {
        id: '1',
        name: 'John Doe',
        rating: '4.3',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam ullam atque, doloremque tenetur corrupti qui saepe vero, sed laudantium voluptates totam expedita quos necessitatibus accusamus voluptate quia hic molestias.',
        date: '10/12/2023'
    },
    {
        id: '2',
        name: 'Hanni Pham',
        rating: '5.0',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '10/12/2023'
    },
    {
        id: '3',
        name: 'Juan Dela Cruz',
        rating: '3.5',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quia, voluptatem expedita tenetur dolores quis sapiente cupiditate consectetur fugiat, sint cum? Cum enim recusandae quas praesentium explicabo quod blanditiis illum.',
        date: '10/12/2023'
    },
    {
        id: '4',
        name: 'Jireh Belen',
        rating: '4.8',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore repellendus aperiam minima perferendis quia error vero libero sunt culpa magni officia et, maiores mollitia cumque, explicabo tempora earum! Saepe.',
        date: '10/12/2023'
    }
];

export default function Profile() {

    function topBarNavigator() {
        
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userSection}>
                <View style={styles.coverContainer}>
                    <Image source={require('../assets/RYBN.jpg')} styles={styles.cover} />
                </View>
                <View style={styles.userInfo}>
                    {/* <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        {/* <Pressable onPress={() => {}}>
                            <Image source={require("../assets/RYBN.jpg")} style={styles.avatar} />
                        </Pressable> */}
                        {/* <Pressable onPress={() => {}} style={styles.editProfile}>
                            <Ionicons name="settings-sharp" size={20} color="#f6f7f9" style={styles.settings} />
                            <Text style={{
                                fontWeight: 700,
                                color: '#f6f7f9'
                            }}>Edit profile</Text>
                        </Pressable> */}
                        {/* <Pressable onPress={() => { }} style={styles.messageButton}>
                            <FontAwesome5 name="envelope" size={20} color="#f6f7f9" />
                            <Text style={{
                                color: '#f6f7f9'
                            }}>
                                Message
                            </Text>
                        </Pressable> 
                    </View> */}
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.companyName}>
                            Lolapalooza
                            </Text>
                            <Pressable onPress={() => {}} style={styles.editProfile}>
                            <Ionicons name="settings-sharp" size={20} color="#f6f7f9" style={styles.settings} />
                            <Text style={{
                                fontWeight: 700,
                                color: '#f6f7f9'
                            }}>Edit profile</Text>
                        </Pressable>
                        </View>
                        <Text style={styles.displayName}>
                            Raven Dela Rama
                        </Text>
                        <Text style={{...styles.role, fontWeight: 'bold'}}>
                            lolapalooza@gmail.com
                        </Text>
                        <Text style={styles.role}>
                            Organizer / Music Festivals
                        </Text>
                    </View>
                    
                    <View>
                        
                        <Text style={{
                            color: 'gray',
                        }}>
                            <Octicons name="location" size={16} color="gray" /> Manila, Philippines
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',  }}>
                        <RatingStatus showRating={true} rating={'3.5'} />
                    </View>
                    <View style={styles.description}>
                        <Text style={{
                            fontSize: 16,
                            letterSpacing: 1,
                            color: '#f6f7f9',
                            textAlign: 'center',
                            paddingVertical: 5
                        }} >
                            Description
                        </Text>
                        <Text style={styles.descriptionContent}>
                            The prospect of planning a business event can trigger a lot of anxiety in an event planner. After all, it’s easy to get overwhelmed by the many different types of events you can choose from. And yet, each event type plays an important role in a company’s event marketing strategy.{'\n\n'}
                            Fortunately, you don’t have to make that choice alone. We’ve compiled a list of eight types of events to make sure you start off in the right direction. No matter your business goals, there’s a strong probability that one of these choices will send you, your sponsors, and your attendees home happy.
                        </Text>
                    </View>

                    {/* <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingHorizontal: 10
                    }}>
                        <Pressable onPress={() => { }} style={styles.bookBotton}>
                        <Text style={{
                            textAlign: 'center',
                            color: '#f6f7f9',
                            fontSize: 14,
                            letterSpacing: 1
                        }}>
                            Book now
                        </Text>
                    </Pressable>
                    </View> */}
                    
                </View>
                
                <View style={styles.topTab}>
                    <Pressable onPress={() => { }} style={styles.topTabItems}>
                        <Text style={styles.topTabText}>
                            Posts
                        </Text>
                    </Pressable>
                    {
                        USER.role === 'Organizer' ?
                        <Pressable onPress={() => { }} style={styles.topTabItems}>
                            <Text style={styles.topTabText}>
                                Reviews
                            </Text>
                        </Pressable>
                            :
                        <Pressable onPress={() => { }} style={styles.topTabItems}>
                            <Text style={styles.topTabText}>
                                Feedbacks
                            </Text>
                        </Pressable>
                    }
                </View>
            </View>

            <View style={styles.userContent}>
                {
                    USER.role === 'Organizer' &&
                    <Service
                        name='John Ray Ben Dela Rama'
                        body=''
                        rating='4.5'
                        attachments={'../assets/RYBN.jpg'}
                        date='10/10/2023'
                    />
                }
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33333f",
        position: 'relative'
    },
    userSection: {
        flex: 1,
    },
    userInfo: {
        backgroundColor: "#22222f",
        flex: 1,
        padding: 10,
        gap: 5,
        position: 'relative'
    },
    avatar: {
        borderRadius: 100,
        height: 70,
        width: 70,
        borderWidth: 3,
        borderColor: '#443cff'
    },
    companyName: {
        fontSize: 18,
        color: '#f6f7f9',
        letterSpacing: 1,
        fontWeight: '500',
        paddingVertical: 10
    },
    role: {
        fontWeight: '200',
        color: 'gray'
    },
    messageButton: {
        backgroundColor: '#ff9030',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        height: 35,
        flexDirection: 'row',
        gap: 8
    },
    topTabButton: {
        flex: .5,
        backgroundColor: '#f6f7f9',
        height: '100%',
        justifyContent: 'center'
    },
    editProfile: {
        borderWidth: 2,
        borderColor: '#f6f7f9',
        borderRadius: 20,
        paddingHorizontal: 10,
        height: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        height: 35
    },
    starItems: {
        flexDirection: 'row',

    },
    descriptionContent: {
        color: '#f6f7f9'
    },
    description: {
        textAlign: 'center',
        padding: 10
    },
    userContent: {
        flex: 1,
        gap: 1
    },
    topTab: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#22222f',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    topTabItems: {},
    topTabText: {
        color: '#f6f7f9'
    },
    coverContainer: {
        height: 200
    },
    cover: {
        height: '100%',
        resizeMode: 'cover',
    },
    bookBotton: {
        backgroundColor: '#ff9030',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    displayName: {
        color: '#f6f7f9',
        fontWeight: '900',
        fontSize: 15,
        letterSpacing: 1
    }
});