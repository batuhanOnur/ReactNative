import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { gs, colors } from '../../../styles';


export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amenities</Text>

            <View style={styles.amenitiesContainer}>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Feather name="wifi" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amneityName}>WI-FI</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amneityName}>Hotel Restaurant</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <FontAwesome5 name="swimmer" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amneityName}>Swimming Pools</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Entypo name="drink" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amneityName}>Bar</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Ionicons name="ios-car" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amneityName}>Parking Slot</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Feather name="speaker" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amneityName}>Night Club</Text>
                </View>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    amenitiesContainer: {
        marginTop: 16,
        marginHorizontal: 16,
        ...gs.rowBetween,
        flexWrap: "wrap"
    },
    amenityContainer: {
        alignItems: 'center',
        width: 90,
        marginVertical: 12
    },

    amenity: {
        width: 48,
        height: 48,
        borderRadius: 24,
        ...gs.center,
        backgroundColor: '#444'
    },
    amneityName: {
        color: colors.lightHl,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 6,
        textAlign: 'center'
    }
})
