import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function RatingStatus(props) {

    return (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                <Text style={{ top: 1, color: '#22222f' }}>
                    {props.rating}
                </Text>
                <View style={styles.starItems}>
                    <MaterialIcons name="star-rate" size={16} color={Number(props.rating) >= 1 ? "#ff9030": "grey"} />
                    <MaterialIcons name="star-rate" size={16} color={Number(props.rating) >= 2 ? "#ff9030": "grey"} />
                    <MaterialIcons name="star-rate" size={16} color={Number(props.rating) >= 3 ? "#ff9030": "grey"} />
                    <MaterialIcons name="star-rate" size={16} color={Number(props.rating) >= 4 ? "#ff9030": "grey"} />
                <MaterialIcons name="star-rate" size={16} color={Number(props.rating) == 5 ? "#ff9030": "grey"} />
                
                
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    starItems: {
        flexDirection: 'row'
    },
})