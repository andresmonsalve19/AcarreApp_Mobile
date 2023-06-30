import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import VehicleRow from "./VehicleRow";
import carriers from "../../data/example_data/carriers";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
import GetStartedButton from "../home/GetStartedButton";

const SelectVehicle = ({navigateTo}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.selectType}>Información del Acarreo</Text>
            <VehicleRow
                type={"Camión"}
                imageURI={carriers[0].vehiclePhoto}
                price={"150.000 COP"}
            />
            <View style={styles.payMethod}>
                <MaterialCommunityIcons name="cash" size={30} />
                <Text style={styles.payMethodText}>Efectivo</Text>
                <MaterialIcons name="keyboard-arrow-down" size={30} />
            </View>
            <Text style={styles.addPromotionalCodeText}>
                Añadir código promocional
            </Text>
            <GetStartedButton title="Seleccionar" navigateTo={navigateTo} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: "center",
        padding: 5,
    },
    selectType: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 10
    },
    payMethod: {
        flexDirection: "row",
        marginVertical: 10,
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

export default SelectVehicle;
