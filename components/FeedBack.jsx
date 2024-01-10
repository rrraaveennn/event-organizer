import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RatingStatus from './profile/ratingStatus';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-provider';
import moment from 'moment';

const POST = {
    avatar: '../assets/RYBN.jpg',
    name: 'RYBN',
    body: 'The preceived enjoyment of an activity can dramatically change whe you realize it\'s a stepping stone to your goals rather than conforming to societal expectations',
    date: '10/12/2023',
    attachment: '../assets/wallpaper.jpg'
}

export default function FeedBack({ avatar, name, rating, date, attachments, navigation }) {
    const { theme } = useContext(ThemeContext);

    return (
        <Pressable onPress={() => {
        }} style={{
            ...styles.container,
            backgroundColor: theme.color
        }}>
            <View style={styles.avatarSection}>
                <Pressable onPress={() => { }} style={styles.avatar}>
                    <Image source={{uri: avatar}} style={styles.avatar} />
                </Pressable>
            </View>
            <View style={styles.contentSection}>
                <View style={styles.userNameContainer}>
                    <Pressable onPress={() => { }} style={{
                        gap: 2
                    }}>
                        <Text style={{
                            ...styles.userName,
                            color: theme.opposite
                        }}>
                            {name}
                        </Text>
                        <RatingStatus rating={rating} />
                    </Pressable>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <Pressable>
                            <Text style={styles.date}>
                                {date}
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => { }}>
                            <Entypo name="dots-three-vertical" size={18} color={theme.opposite} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={{
                        ...styles.body,
                        color: theme.opposite
                    }}>
                        
                        {POST.body}
                    </Text>

                    {
                        attachments && 
                        <View style={{
                            paddingVertical: 20,
                            paddingRight: 10
                        }}>
    
                            <View style={styles.attachments}>
                                <Image source={{uri: attachments}} style={styles.attachmentImage} />
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
        color: 'black'
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
    },
    attachments: {
        borderColor: 'grey',
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