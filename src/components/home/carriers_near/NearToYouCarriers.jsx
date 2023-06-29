import React, {useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, LogBox} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AvailableServicesList from "./AvailbleServicesList";
import Colors from "../../../constants/Colors";
import GetStartedButton from "../GetStartedButton";

const NearToYouCarriers = ({navigateTo, carriersNear}) => {
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.nearToYouText}>Acarredores cerca de ti</Text>
            {/* Acarreadores cerca - Flatlist de servicios disponibles cercanos */}
            <AvailableServicesList carriersNear={carriersNear} />
            {/* Método de pago */}
            <View style={styles.payMethod}>
                <MaterialCommunityIcons name="cash" size={30} />
                <Text style={styles.payMethodText}>Efectivo</Text>
                <MaterialIcons name="keyboard-arrow-down" size={30} />
            </View>
            <Text style={styles.addPromotionalCodeText}>
                Añadir código promocional
            </Text>
            {/* Botón */}
            <GetStartedButton title="Seleccionar" navigateTo={navigateTo} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EAEDED",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: "center",
        paddingBottom: 20,
    },
    nearToYouText: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
    fontSize: 16,
    payMethod: {
        flexDirection: "row",
        marginBottom: 10,
        alignContent: "center",
        alignItems: "center",
    },
    payMethodText: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 5,
        marginRight: 10,
    },
    addPromotionalCodeText: {
        color: Colors.primary,
        marginBottom: 5,
    },
});

export default NearToYouCarriers;
