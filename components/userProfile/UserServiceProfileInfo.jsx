import { View, Text, StyleSheet, Pressable, Image, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import RatingStatus from '../profile/ratingStatus';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-provider';
import ProfileCover from '../profile/ProfileCover';

export default function UserServiceProfileInfo(props) {
    const { theme } = useContext(ThemeContext);
    const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);
    return (<View>
        
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: "relative"
        }}>
            <Image
                style={styles.avatar}
                source={{
                    uri: props.image
                }}
                />
               
            
            {/* <Pressable onPress={() => {
                setEditProfileModalVisible(true)
            }} style={{
                ...styles.editProfile,
                borderColor: "#434d56"
            }}>
            <Ionicons name="settings-sharp" size={20} color={"#434d56"} style={styles.settings} />
            <Text style={{
                    fontWeight: 700,
                    color: "#434d56",
            }}>Edit profile</Text>
            </Pressable> */}

<Pressable>
                <AntDesign name="message1" size={24} color="black" />
            </Pressable>


            <Pressable onPress={() => {
                setEditProfileModalVisible(true)
            }} style={{
                backgroundColor: "#ff9030",
                color: "#dde5eb",
                borderRadius: 20,
                paddingHorizontal: 20,
                height: 30,
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 8,
                alignItems: 'center',
                height: 35,
                position: "relative",
                marginTop: 10,
                left: 0
            }}>
                <AntDesign name="book" size={24} color="#dde5eb" />
                        <Text style={{
                            textAlign: 'center',
                    color: '#f6f7f9',
                    fontSize: 14,
                            fontWeight: "700",
                        }}>
                            Book now
                        </Text>
                    </Pressable>
            </View>
        <Modal
            animationType={"slide"}
            visible={editProfileModalVisible}
            transparent={true}
            onRequestClose={() => {
                setEditProfileModalVisible(false);
            }}
            style={{
            }}
        >
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
            }}
            >
                <View style={{
                    height: 460,
                    width: "100%",
                    backgroundColor: theme.color
                }}>
                    <View style={{
                        padding: 20,
                        borderTopWidth: 1,
                        borderColor: "#434d56",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        gap: 3,
                    }}>

                        <Pressable
                            style={{
                                paddingHorizontal: 10,
                            }}
                            onPress={() => {
                                setEditProfileModalVisible(false)
                            }}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: theme.opposite
                            }}>
                                Cancel
                            </Text>
                        </Pressable>
                        <Pressable
                            style={{
                                paddingHorizontal: 10,
                            }}
                            onPress={() => {
                                setEditProfileModalVisible(false)
                            }}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: theme.opposite
                            }}>
                                Save
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
                </Modal> 

        <View style={{
            gap: 3,
            paddingTop: 30,
            position: "relative"
        }}>
            <Text style={{
                ...styles.displayName,
                color: theme.opposite
            }}>
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
                <RatingStatus showRating={true} rating={props.rating} />
            </View>
        </View>

        
    </View>)
}

const styles = StyleSheet.create({
    displayName: {
        fontWeight: '700',
        fontSize: 16,
        letterSpacing: 2
    },
    companyName: {
        fontSize: 18,
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
        borderRadius: 20,
        paddingHorizontal: 10,
        height: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        height: 35,
        position: "relative",
        marginTop: 10,
        left: 220
    },
    avatar: {
        marginBottom: 5,
        borderRadius: 200,
        width: 100,
        height: 100,
        position: "absolute",
        bottom: -15
    }
})