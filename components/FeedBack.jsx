import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RatingStatus from './profile/ratingStatus';

const POST = {
    avatar: '../assets/RYBN.jpg',
    name: 'RYBN',
    body: 'The preceived enjoyment of an activity can dramatically change whe you realize it\'s a stepping stone to your goals rather than conforming to societal expectations',
    date: '10/12/2023',
    attachment: '../assets/wallpaper.jpg'
}

export default function FeedBack(props) {
    const attachment = props.attachment;

    return (
        <Pressable onPress={() => {}} style={styles.container}>
            <View style={styles.avatarSection}>
                <Pressable onPress={() => { }} style={styles.avatar}>
                    <Image source={{uri: props.avatar}} style={styles.avatar} />
                </Pressable>
            </View>
            <View style={styles.contentSection}>
                <View style={styles.userNameContainer}>
                    <Pressable onPress={() => { }} style={{
                        gap: 2
                    }}>
                        <Text style={styles.userName}>
                            {props.name}
                        </Text>
                        <RatingStatus rating={props.rating} />
                    </Pressable>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <Pressable>
                            <Text style={styles.date}>
                                {props.date}
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => { }}>
                            <Entypo name="dots-three-vertical" size={18} color="#f6f7f9" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.body}>
                        
                        {POST.body}
                    </Text>

                    {
                        props.attachments && 
                        <View style={{
                            paddingVertical: 20,
                            paddingRight: 10
                        }}>
    
                            <View style={styles.attachments}>
                                <Image source={{uri: props.attachments}} style={styles.attachmentImage} />
                            </View>
                        </View>
                    }
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#22222f',
        padding: 15,
        // height: 200
    },
    avatarSection: {
        // backgroundColor: '',
        height: '100%'
    },
    avatar: {
        borderRadius: 50,
        height: 40,
        width: 40,
    },
    contentSection: {
        flex: 1,
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        // backgroundColor: 'white',
        paddingBottom: 8
    },
    userName: {
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#f6f7f9'
    },
    date: {
        fontSize: 12,
        letterSpacing: 1,
        color: 'gray',
        fontSize: 10
    },
    body: {
        lineHeight: 20,
        fontSize: 14.5,
        color: '#f6f7f9'
    },
    attachments: {
        borderColor: 'rgba(200, 200, 200, 0.5)',
        borderWidth: 1,
        borderRadius: 15,
        height: 300
    },
    attachmentImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        resizeMode: 'cover'
    }
});