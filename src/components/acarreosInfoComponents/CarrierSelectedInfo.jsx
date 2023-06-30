import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../constants/Colors";

const CarrierSelectedInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.acarreoInfoContainer}>
                <Image
                    style={styles.vehicleImage}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyF5Wlk9htXwWjvl9-mL7oPeYOFeQ_Afo9GKC7Hk&s",
                    }}
                />
                <View style={styles.acarreoInfo}>
                    <Text style={styles.carType}> Camioneta</Text>
                    <Text style={styles.name}>Carrier Tres</Text>
                    <Text style={styles.price}>$150.000</Text>
                </View>
            </View>
            <View style={styles.contactContainer}>
                <View style={styles.phoneContainer}>
                    <Feather name="phone-call" size={30} />
                </View>
                <View style={styles.messageContainer}>
                    <Feather name="message-square" size={30} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: Colors.border,
        borderRadius: 10,
    },
    acarreoInfoContainer: {
        flexDirection: "row",
    },
    vehicleImage: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        borderRadius: 10,
        marginRight: 10,
    },
    acarreoInfo: {
        flexDirection: "column",
        alignItems: "center"
    },
    phoneContainer: {
        width: 50,
        height: 50,
        backgroundColor: Colors.primary,
        alignContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 10
    },
    messageContainer: {
        width: 50,
        height: 50,
        backgroundColor: Colors.primary,
        alignContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
    },
    contactContainer: {
        flexDirection: "row",
    },
    carType: {
        fontWeight: "bold",
        fontSize: 16,
    },
    name: {
        fontWeight: "bold"
    },
    price: {
        color: "#2BC56C",
        fontWeight: "bold",
    }
});

export default CarrierSelectedInfo;
