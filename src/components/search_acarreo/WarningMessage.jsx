import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const WarningMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                No te olvides de revisar el estado de tus objetos al finalizar
            </Text>
            <Text style={styles.body}>
                Una vez finalizado el acarreo y cerrado el servicio no se podrán
                hacer reclamos
            </Text>
            <View style={styles.learnMore}>
                <Text style={styles.learnMoreText}>Conoce más</Text>
                <FontAwesome name="arrow-right" size={15} color={"#fff"}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2b80ff",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },
    body: {
        color: "#bed9ff",
        fontSize: 15,
        marginBottom: 10,
    },
    learnMore: {
        flexDirection: "row",
        alignItems: "center"
    },
    learnMoreText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 4,
    },
});

export default WarningMessage;
