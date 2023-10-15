import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Pressable,
    FlatList
} from 'react-native';
import NoContent from '../components/NoContent';
import { FontAwesome5 } from '@expo/vector-icons';
import Review from '../components/Review';
import Description from '../components/profile/Description';
import ProfileUserInfo from '../components/profile/ProfileUserInfo';


const USER = {
    name: 'RYBN',
    email: 'rrraaveennn@gmail.com',
    role: 'Organizer',
    service: 'Concerts',
    address: 'Manila, Philippines',
    rating: '3.5',
    description: "The prospect of planning a business event can trigger a lot of anxiety in an event planner. After all, it’s easy to get overwhelmed by the many different types of events you can choose from. And yet, each event type plays an important role in a company’s event marketing strategy. Fortunately, you don’t have to make that choice alone.We’ve compiled a list of eight types of events to make sure you start off in the right direction.No matter your business goals, there’s a strong probability that one of these choices will send you, your sponsors, and your attendees home happy."
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
                    <Image source={require('../assets/wallpaper.jpg')} styles={styles.cover} />
                </View>
                <View style={styles.userInfo}>
                    <ProfileUserInfo
                        companyName={'Lolapalooza'}
                        firstName={'Raven'}
                        lastName={'Dela Rama'}
                        email={'lolapalooza@gmail.com'}
                        role={'Organizer'}
                        serviceCategory={'Music Festivals'}
                        location={'Manila, Philippines'}
                        rating={'3.5'}
                    />
                    <Description>
                        {USER.description}
                    </Description>

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
                    <Pressable onPress={() => { }} style={styles.topTabItems}>
                        <Text style={styles.topTabText}>
                            Reviews
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.userContent}>
                {
                    USER.role === 'Organizer' &&
                    <Review
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
    starItems: {
        flexDirection: 'row',

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
        width: '100%',
        resizeMode: 'repeat',
    },
    bookBotton: {
        backgroundColor: '#ff9030',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    
});