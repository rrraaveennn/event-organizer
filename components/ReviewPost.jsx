import { StyleSheet, View, Text, Image } from "react-native";
import RatingStatus from "./ratingStatus";


export default function ReviewPost(props) {
    return (
        <View style={styles.review}>
            <View style={styles.reviewHeader}>
                <View style={styles.userSection}>
                    <Image source={require('../assets/user.png')} style={styles.avatar} />
                    <Text style={{
                        fontWeight: 700,
                        color: '#f6f7f9'
                    }}>
                        {props.user}
                    </Text>
                </View>
                <RatingStatus rating={props.rating} />
            </View>
            <View>
            <Text style={styles.reviewContent}>
                {props.children}
            </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userSection: {
        flexDirection: 'row',
        gap: 5,
    },
    avatar: {
        height: 20,
        width: 20
    },
    review: {
        backgroundColor: '#22222f',
        flex: 1,
        padding: 15,
        gap: 4
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reviewContent: {
        color: '#f6f7f9'
    }
})