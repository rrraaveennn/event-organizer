import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Pressable,
    FlatList
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Description from '../../components/profile/Description';
import ProfileUserInfo from '../../components/profile/ProfileUserInfo';
import FeedBack from '../../components/FeedBack';
// import ProfileCover from '../../../components/profile/ProfileCover';

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
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
        name: 'John Doe',
        rating: 4.3,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam ullam atque, doloremque tenetur corrupti qui saepe vero, sed laudantium voluptates totam expedita quos necessitatibus accusamus voluptate quia hic molestias.',
        date: '10/12/2023',
        attachments: "https://i.pinimg.com/originals/f8/4d/7f/f84d7fb2d66db7e1ad9fcff283acf4b0.jpg"
    },
    {
        id: '2',
        avatar: "https://tse2.mm.bing.net/th?id=OIP.lKeaRLwrxwFs86itxhpUQQHaLJ&pid=Api&P=0&h=220",
        name: 'Juan Dela Cruz',
        rating: 5.0,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '10/12/2023',
        attachments: "https://tse2.mm.bing.net/th?id=OIP.4Ob5YvSVnSsdQrs0In27ngHaHe&pid=Api&P=0&h=220"
    },
    {
        id: '3',
        avatar: "http://hdqwalls.com/download/1/gwen-stacy-in-spider-man-into-the-spider-verse-movie-vz-2160x3840.jpg",
        name: 'Gwen Stacy',
        rating: 3.5,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quia, voluptatem expedita tenetur dolores quis sapiente cupiditate consectetur fugiat, sint cum? Cum enim recusandae quas praesentium explicabo quod blanditiis illum.',
        date: '10/12/2023'
    },
    {
        id: '4',
        avatar: "https://i.pinimg.com/736x/a2/69/c7/a269c719b12e50d7ad9dd5aa31577c6e--andrew-garfield-amazing-spider.jpg",
        name: 'Peter Parker',
        rating: 4.8,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore repellendus aperiam minima perferendis quia error vero libero sunt culpa magni officia et, maiores mollitia cumque, explicabo tempora earum! Saepe.',
        date: '10/12/2023',
        attachments: "https://tse2.mm.bing.net/th?id=OIP.rYKQ717kMWZcRqR66CzrewHaEo&pid=Api&P=0&h=220"
    }
];

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.userSection}>
                
                <View style={styles.userInfo}>
                    <ProfileUserInfo
                        companyName={'Raven Events  '}
                        firstName={'Raven'}
                        lastName={'Dela Rama'}
                        email={'ravendelarama@gmail.com'}
                        role={'Organizer'}
                        serviceCategory={'Birthday'}
                        location={'Manila, Philippines'}
                        rating={() => {
                            return (DATA[0].rating + DATA[1].rating) / DATA.length();
                        }}
                    />
                    <Description companyName={"Meta"}>
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
                            Reviews
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.userContent}>

                {
                    DATA.map((item, index) => {

                        return <FeedBack key={index}
                            avatar={item.avatar}
                            name={item.name}
                            body={item.comment}
                            rating={item.rating}
                            attachments={item.attachments}
                            date={item.date}
                        />
                    })
                }
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        position: 'relative'
    },
    userSection: {
        flex: 1,
    },
    userInfo: {
        backgroundColor: "white",
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
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    topTabItems: {},
    topTabText: {
        color: 'black'
    },
    bookBotton: {
        backgroundColor: '#ff9030',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    
});