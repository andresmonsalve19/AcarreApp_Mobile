import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Colors from "../../constants/Colors";

const VehicleRow = ({type, imageURI, price}) => {
    return (
        <View style={styles.container}>
            <View style={styles.vehicleContainer}>
                <Image
                    style={styles.vehicleImage}
                    source={{
                        uri: imageURI,
                    }}
                />
                <Text style={styles.type}>{type}</Text>
            </View>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        padding: 8,
        borderRadius: 5,
        backgroundColor: Colors.border,
        marginHorizontal: 5,
        marginVertical: 2,
        width: "100%"
    },
    vehicleContainer: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    type: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
    vehicleImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 10,
    },
    price: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#28B463",
        fontStyle: "italic",
    },
});

export default VehicleRow;
