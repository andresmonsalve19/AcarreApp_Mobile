import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const PlacesSuggested = ({data}) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.description === "Home" ? (
                    <Entypo name="home" size={20} color={"white"} />
                ) : (
                    <Entypo name="location-pin" size={20} color={"white"} />
                )}
            </View>
            <Text style={styles.locationText}>
                {data.description || data.vicinity}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 10
    },
    iconContainer: {
        backgroundColor: "#a2a2a2",
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    textContainer: {
        marginRight: 5,
    },
    locationText: {
        fontWeight: "bold",
        fontSize: 16
    }
});

export default PlacesSuggested;
