import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Colors from "../../../constants/Colors";

const AvailableService = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <View style={styles.vehicleContainer}>
                <Image
                    style={styles.vehicleImage}
                    source={{
                        uri: props.carrier.vehicle.image,
                    }}
                />
                <Text style={styles.vehicleName}>{props.carrier.vehicle.type}</Text>
            </View>
            <View style={styles.carrierContainer}>
                <Text style={styles.carrierName}>{props.carrier.user.name}</Text>
                <Image
                    style={styles.carrierPhoto}
                    source={{
                        uri: props.carrier.photo
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        marginVertical: 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.border,
        marginHorizontal: 5,
    },
    vehicleContainer: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    vehicleImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 10,
    },
    vehicleName: {
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 16,
    },
    carrierContainer: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    carrierPhoto: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 50,
    },
    carrierName: {
        fontWeight: "bold",
        marginRight: 10,
        fontSize: 16,
    },
});

export default AvailableService;
