import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import RatingStatus from './ratingStatus';

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
            <Ionicons name="settings-sharp" size={20} color="black" style={styles.settings} />
            <Text style={{
                fontWeight: 700,
                color: 'black'
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
                <RatingStatus showRating={true} rating={4.2} />
            </View>
        </View>

        
    </View>)
}

const styles = StyleSheet.create({
    displayName: {
        color: 'black',
        fontWeight: '900',
        fontSize: 15,
        letterSpacing: 1
    },
    companyName: {
        fontSize: 18,
        color: 'black',
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
        borderColor: 'black',
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