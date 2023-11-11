import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import RatingStatus from './ratingStatus';
import ratingAverage from '../../lib/rating-average';

export default function ProfileUserInfo(props) {
    return (<View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Image
                style={styles.avatar}
                source={require("../../assets/RYBN.jpg")}
            />
            
            <Pressable onPress={() => {}} style={styles.editProfile}>
            <Ionicons name="settings-sharp" size={20} color="#f6f7f9" style={styles.settings} />
            <Text style={{
                fontWeight: 700,
                color: '#f6f7f9'
            }}>Edit profile</Text>
            </Pressable>
        </View>

        <View style={{
            gap: 3,
            position: "relative"
        }}>
            <Text style={styles.displayName}>
                {props.firstName} {props.lastName}
            </Text>
            <Text style={{...styles.role, fontWeight: 'bold'}}>
                {props.email}
            </Text>
            <Text style={styles.role}>
                {props.role} / {props.serviceCategory}
            </Text>

            <View>
                <Text style={{
                    color: 'gray',
                }}>
                    <Octicons name="location" size={16} color="gray" /> {props.location}
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',  }}>
                <RatingStatus showRating={true} rating={ratingAverage([3.5, 1.6, 2.7])} />
            </View>
        </View>

        
    </View>)
}

const styles = StyleSheet.create({
    displayName: {
        color: '#f6f7f9',
        fontWeight: '900',
        fontSize: 15,
        letterSpacing: 1
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
    avatar: {
        // position: "absolute",
        // top: -50,
        marginBottom: 5,
        borderRadius: 200,
        width: 100,
        height: 100
    }
})