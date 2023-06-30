import React from "react";
import {StyleSheet, Text, View, ScrollView, StatusBar} from "react-native";
import SearchAcarreoMap from "../../components/search_acarreo/SearchAcarreoMap";
import WarningMessage from "../../components/search_acarreo/WarningMessage";
import SearchBar from "../../components/search_acarreo/SearchBar";

export default function SearchAcarreoScreen({navigation}) {
    const goToSearch = () => {
        navigation.navigate("SeleccionaDestino");
    };

    return (
        <View style={styles.container}>
            {/* Barra de búsqueda */}
            <SearchBar navigateTo={goToSearch} />
            {/* Mapa */}
            <SearchAcarreoMap height={"100%"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});
