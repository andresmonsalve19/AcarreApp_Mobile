import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";

const SearchBar = ({navigateTo}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={navigateTo} style={styles.inputBox}>
                <FontAwesome5 name="search-location" size={20} color={"#434343"} />
                <Text style={styles.inputText}>Ingrese su dirección de destino...</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "#e7e7e7",
        margin: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
    },
    inputText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "600",
        color: "#434343",
    },
});

export default SearchBar;
