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
import ReviewPost from '../components/ReviewPost';
import RatingStatus from '../components/ratingStatus';
import NoContent from '../components/NoContent';
import { FontAwesome5 } from '@expo/vector-icons';

const DATA = [
    {
        id: '1',
        name: 'John Doe',
        rating: '1.3',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam ullam atque, doloremque tenetur corrupti qui saepe vero, sed laudantium voluptates totam expedita quos necessitatibus accusamus voluptate quia hic molestias.'
    },
    {
        id: '2',
        name: 'Hanni Pham',
        rating: '5.0',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: '3',
        name: 'Juan Dela Cruz',
        rating: '3.5',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quia, voluptatem expedita tenetur dolores quis sapiente cupiditate consectetur fugiat, sint cum? Cum enim recusandae quas praesentium explicabo quod blanditiis illum.'
    },
    {
        id: '4',
        name: 'Jireh Belen',
        rating: '4.8',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore repellendus aperiam minima perferendis quia error vero libero sunt culpa magni officia et, maiores mollitia cumque, explicabo tempora earum! Saepe.'
    }
];

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.userSection}>
                <View style={styles.userInfo}>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Pressable onPress={() => {}}>
                            <Image source={require("../assets/RYBN.jpg")} style={styles.avatar} />
                        </Pressable>
                        <Pressable onPress={() => {}} style={styles.editProfile}>
                            <Ionicons name="settings-sharp" size={20} color="#f6f7f9" style={styles.settings} />
                            <Text style={{
                                fontWeight: 700,
                                color: '#f6f7f9'
                            }}>Edit profile</Text>
                        </Pressable>
                        <Pressable onPress={() => { }} style={styles.messageButton}>
                            <FontAwesome5 name="envelope" size={20} color="#f6f7f9" />
                            <Text style={{
                                color: '#f6f7f9'
                            }}>
                                Message
                            </Text>
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.displayName}>
                            RYBN
                        </Text>
                        <Text style={{...styles.role, fontWeight: 'bold'}}>
                            rrraaveennn@gmail.com
                        </Text>
                        <Text style={styles.role}>
                            Organizer / Concerts
                        </Text>
                    </View>
                    <View style={styles.bio}>
                        <Text style={styles.bioContent}>
                            Hello, I'm Raven.
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
                        <RatingStatus rating={"2.9"} />
                    </View>
                </View>
                <View style={styles.topTab}>
                    <Pressable onPress={() => { }} style={styles.topTabItems}>
                        <Text style={styles.topTabText}>
                            Reviews
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => { }} style={styles.topTabItems}>
                        <Text style={styles.topTabText}>
                            Feedbacks
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.userContent}>
                {
                    DATA.map((item) => <ReviewPost name={item.name} rating={item.rating}>
                        {item.comment}
                    </ReviewPost>)
                }
                {/* <ReviewPost user={"John Doe"} rating={"1.3"} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam ullam atque, doloremque tenetur corrupti qui saepe vero, sed laudantium voluptates totam expedita quos necessitatibus accusamus voluptate quia hic molestias.
                </ReviewPost>
                <ReviewPost user={"Hanni Pham"} rating={"5.0"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ReviewPost>
                <ReviewPost user={"Juan Dela Cruz"} rating={"3.5"}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quia, voluptatem expedita tenetur dolores quis sapiente cupiditate consectetur fugiat, sint cum? Cum enim recusandae quas praesentium explicabo quod blanditiis illum.
                </ReviewPost>
                <ReviewPost user={"Jireh Belen"} rating={"4.8"}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore repellendus aperiam minima perferendis quia error vero libero sunt culpa magni officia et, maiores mollitia cumque, explicabo tempora earum! Saepe.
                </ReviewPost> */}
                <NoContent headline={"No More Reviews"} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33333f",
    },
    userSection: {
        flex: 1,
        marginBottom: 5
    },
    userInfo: {
        backgroundColor: "#22222f",
        flex: 1,
        padding: 10,
        gap: 5
    },
    avatar: {
        borderRadius: 100,
        height: 70,
        width: 70,
        borderWidth: 3,
        borderColor: '#443cff'
    },
    displayName: {
        fontSize: 18,
        color: '#f6f7f9'
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
    topTab: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
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
    bioContent: {
        color: '#f6f7f9'
    },
    bio: {
        width: 300
    },
    userContent: {
        flex: 1,
        gap: 5
    },
    topTab: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#22222f'
    },
    topTabItems: {},
    topTabText: {
        color: '#f6f7f9'
    }
});